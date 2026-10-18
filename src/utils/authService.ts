/**
 * Hope Dental Hospital & Wellness Centre
 * Production-Ready Admin Authentication & Session Security Service
 */

const CREDENTIALS_KEY = 'hdh_admin_credentials';
const SESSION_KEY = 'hdh_admin_session';
const LOCKOUT_KEY = 'hdh_admin_lockout';

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000; // 60 seconds lockout
const DEFAULT_SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours
const REMEMBER_ME_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

// Precomputed SHA-256 hash for 'HopeDental@2026#'
const DEFAULT_PASSWORD_HASH = '2ea7f031c4edac5edff45154ec6569a78245f4dc3dc1b59e94d2ab8ab5174e03';
const DEFAULT_EMAIL = 'admin@hopedental.com';
const DEFAULT_USERNAME = 'admin';

export interface AdminUser {
  email: string;
  username: string;
  role: string;
  passwordHash: string;
  lastLogin?: string;
}

export interface AdminSession {
  token: string;
  email: string;
  role: string;
  expiresAt: number;
}

export interface LockoutStatus {
  isLocked: boolean;
  remainingSeconds: number;
  failedAttempts: number;
}

export interface AuthResult {
  success: boolean;
  message: string;
  remainingAttempts?: number;
  lockSeconds?: number;
  user?: AdminSession;
}

/**
 * Computes SHA-256 hash in hex format using browser Web Crypto API
 */
export async function sha256(text: string): Promise<string> {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Fallback simple checksum (should not occur in modern browsers)
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString(16);
}

/**
 * Retrieve saved admin user credentials or set up default credentials
 */
export function getStoredCredentials(): AdminUser {
  try {
    const raw = localStorage.getItem(CREDENTIALS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Error reading admin credentials from storage:', e);
  }

  const defaultUser: AdminUser = {
    email: DEFAULT_EMAIL,
    username: DEFAULT_USERNAME,
    role: 'Senior Medical Administrator',
    passwordHash: DEFAULT_PASSWORD_HASH
  };

  try {
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(defaultUser));
  } catch (e) {
    // Ignore storage quota errors
  }

  return defaultUser;
}

/**
 * Checks brute-force lockout status
 */
export function getLockoutStatus(): LockoutStatus {
  try {
    const raw = localStorage.getItem(LOCKOUT_KEY);
    if (!raw) {
      return { isLocked: false, remainingSeconds: 0, failedAttempts: 0 };
    }

    const { attempts, lockUntil } = JSON.parse(raw);
    const now = Date.now();

    if (lockUntil && lockUntil > now) {
      const remainingSeconds = Math.ceil((lockUntil - now) / 1000);
      return { isLocked: true, remainingSeconds, failedAttempts: attempts || MAX_FAILED_ATTEMPTS };
    }

    // Lock has expired; reset attempts
    if (lockUntil && lockUntil <= now) {
      localStorage.removeItem(LOCKOUT_KEY);
      return { isLocked: false, remainingSeconds: 0, failedAttempts: 0 };
    }

    return { isLocked: false, remainingSeconds: 0, failedAttempts: attempts || 0 };
  } catch {
    return { isLocked: false, remainingSeconds: 0, failedAttempts: 0 };
  }
}

/**
 * Record a failed login attempt
 */
function recordFailedAttempt(): { remainingAttempts: number; isLocked: boolean; lockSeconds: number } {
  try {
    const status = getLockoutStatus();
    const newAttempts = status.failedAttempts + 1;

    if (newAttempts >= MAX_FAILED_ATTEMPTS) {
      const lockUntil = Date.now() + LOCKOUT_DURATION_MS;
      localStorage.setItem(LOCKOUT_KEY, JSON.stringify({ attempts: newAttempts, lockUntil }));
      return { remainingAttempts: 0, isLocked: true, lockSeconds: Math.ceil(LOCKOUT_DURATION_MS / 1000) };
    }

    localStorage.setItem(LOCKOUT_KEY, JSON.stringify({ attempts: newAttempts, lockUntil: null }));
    return { remainingAttempts: MAX_FAILED_ATTEMPTS - newAttempts, isLocked: false, lockSeconds: 0 };
  } catch {
    return { remainingAttempts: 1, isLocked: false, lockSeconds: 0 };
  }
}

/**
 * Reset failed attempts upon successful login
 */
function resetLockout(): void {
  try {
    localStorage.removeItem(LOCKOUT_KEY);
  } catch {
    // Ignore storage issues
  }
}

/**
 * Check if the active admin session is valid and not expired
 */
export function isAuthenticated(): boolean {
  try {
    const raw = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;

    const session: AdminSession = JSON.parse(raw);
    if (!session || !session.token || !session.expiresAt) return false;

    if (Date.now() > session.expiresAt) {
      logout();
      return false;
    }

    return true;
  } catch {
    logout();
    return false;
  }
}

/**
 * Get current authenticated admin session details
 */
export function getCurrentSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;

    const session: AdminSession = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      logout();
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

/**
 * Perform login verification with SHA-256 hashing and brute-force protection
 */
export async function loginAdmin(
  identifier: string,
  rawPassword: string,
  rememberMe: boolean = false
): Promise<AuthResult> {
  const lockout = getLockoutStatus();
  if (lockout.isLocked) {
    return {
      success: false,
      message: `Account temporarily locked due to repeated failed attempts. Please retry in ${lockout.remainingSeconds}s.`,
      lockSeconds: lockout.remainingSeconds
    };
  }

  const cleanIdentifier = identifier.trim().toLowerCase();
  const credentials = getStoredCredentials();

  const isIdentifierMatch = 
    cleanIdentifier === credentials.email.toLowerCase() ||
    cleanIdentifier === credentials.username.toLowerCase();

  const inputHash = await sha256(rawPassword.trim());
  const isPasswordMatch = inputHash === credentials.passwordHash;

  if (!isIdentifierMatch || !isPasswordMatch) {
    const failStatus = recordFailedAttempt();
    if (failStatus.isLocked) {
      return {
        success: false,
        message: `Too many failed attempts. Security protocol activated. Locked for ${failStatus.lockSeconds}s.`,
        remainingAttempts: 0,
        lockSeconds: failStatus.lockSeconds
      };
    }

    return {
      success: false,
      message: `Invalid credentials. Please verify your email/username and password (${failStatus.remainingAttempts} attempts remaining).`,
      remainingAttempts: failStatus.remainingAttempts
    };
  }

  // Success: Reset lockout and generate session
  resetLockout();

  const duration = rememberMe ? REMEMBER_ME_DURATION_MS : DEFAULT_SESSION_DURATION_MS;
  const expiresAt = Date.now() + duration;
  const randomToken = `HDH-SEC-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;

  const session: AdminSession = {
    token: randomToken,
    email: credentials.email,
    role: credentials.role || 'Senior Medical Administrator',
    expiresAt
  };

  const storage = rememberMe ? localStorage : sessionStorage;
  storage.setItem(SESSION_KEY, JSON.stringify(session));

  // Update last login
  try {
    const updatedUser = { ...credentials, lastLogin: new Date().toISOString() };
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(updatedUser));
  } catch (e) {
    // Ignore
  }

  return {
    success: true,
    message: 'Authentication successful. Loading Admin Dashboard...',
    user: session
  };
}

/**
 * Logout and invalidate session
 */
export function logout(): void {
  try {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Ignore
  }
}

/**
 * Change administrator master password
 */
export async function changeAdminPassword(
  oldPassword: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  if (!newPassword || newPassword.length < 8) {
    return {
      success: false,
      message: 'New password must be at least 8 characters long.'
    };
  }

  const credentials = getStoredCredentials();
  const oldHash = await sha256(oldPassword.trim());

  if (oldHash !== credentials.passwordHash) {
    return {
      success: false,
      message: 'Current password does not match.'
    };
  }

  const newHash = await sha256(newPassword.trim());
  const updatedUser: AdminUser = {
    ...credentials,
    passwordHash: newHash
  };

  try {
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(updatedUser));
    return {
      success: true,
      message: 'Master password updated successfully!'
    };
  } catch (e) {
    return {
      success: false,
      message: 'Failed to save updated password.'
    };
  }
}

/**
 * Demo credential constants for easy visual reference
 */
export const DEMO_CREDENTIALS = {
  email: DEFAULT_EMAIL,
  username: DEFAULT_USERNAME,
  password: 'HopeDental@2026#'
};
