import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Calendar, 
  FileText, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  Search, 
  Phone, 
  MapPin, 
  Save, 
  CheckCircle2, 
  AlertTriangle, 
  DollarSign, 
  ArrowLeft,
  Lock,
  Eye,
  EyeOff,
  LogOut,
  KeyRound,
  Sparkles,
  ShieldAlert,
  UserCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Treatment, BlogPost, Appointment } from '../types';
import { 
  isAuthenticated, 
  loginAdmin, 
  logout, 
  getCurrentSession, 
  getLockoutStatus, 
  changeAdminPassword, 
  DEMO_CREDENTIALS,
  AdminSession 
} from '../utils/authService';

export const AdminPage: React.FC = () => {
  const { 
    hospitalStatus, 
    updateHospitalStatus, 
    treatments, 
    addTreatment, 
    updateTreatment, 
    deleteTreatment, 
    blogs, 
    addBlogPost, 
    updateBlogPost, 
    deleteBlogPost, 
    appointments, 
    updateAppointmentStatus,
    navigateTo 
  } = useApp();

  // =========================================================================
  // AUTHENTICATION & SESSION STATE
  // =========================================================================
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => isAuthenticated());
  const [session, setSession] = useState<AdminSession | null>(() => getCurrentSession());

  // Login form inputs
  const [loginIdentifier, setLoginIdentifier] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string>('');
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [lockoutSeconds, setLockoutSeconds] = useState<number>(0);

  // Password Change Modal state
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [changePasswordMsg, setChangePasswordMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Lockout countdown timer
  useEffect(() => {
    const status = getLockoutStatus();
    if (status.isLocked && status.remainingSeconds > 0) {
      setLockoutSeconds(status.remainingSeconds);
    }
  }, []);

  useEffect(() => {
    if (lockoutSeconds <= 0) return;
    const interval = setInterval(() => {
      setLockoutSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setLoginError('');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutSeconds]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await loginAdmin(loginIdentifier, loginPassword, rememberMe);
      if (res.success && res.user) {
        setIsLoggedIn(true);
        setSession(res.user);
        setLoginPassword('');
        setLoginError('');
      } else {
        setLoginError(res.message);
        if (res.lockSeconds && res.lockSeconds > 0) {
          setLockoutSeconds(res.lockSeconds);
        }
      }
    } catch {
      setLoginError('Authentication service encountered an unexpected error.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleQuickDemoFill = () => {
    setLoginIdentifier(DEMO_CREDENTIALS.email);
    setLoginPassword(DEMO_CREDENTIALS.password);
    setLoginError('');
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out from the Admin Portal?')) {
      logout();
      setIsLoggedIn(false);
      setSession(null);
    }
  };

  const handleChangePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setChangePasswordMsg({ type: 'error', text: 'New password and confirm password do not match.' });
      return;
    }
    if (newPassword.length < 8) {
      setChangePasswordMsg({ type: 'error', text: 'Password must be at least 8 characters long.' });
      return;
    }

    const res = await changeAdminPassword(oldPassword, newPassword);
    if (res.success) {
      setChangePasswordMsg({ type: 'success', text: res.message });
      setTimeout(() => {
        setIsChangePasswordOpen(false);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setChangePasswordMsg(null);
      }, 1500);
    } else {
      setChangePasswordMsg({ type: 'error', text: res.message });
    }
  };

  // =========================================================================
  // TAB SELECTION & CRUD STATES
  // =========================================================================
  const [activeTab, setActiveTab] = useState<'services' | 'timing' | 'bookings' | 'cms'>('services');

  // TAB 1: Services
  const [serviceSearch, setServiceSearch] = useState('');
  const [editingTreatment, setEditingTreatment] = useState<Treatment | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [serviceForm, setServiceForm] = useState<Partial<Treatment>>({
    title: '',
    titleHi: '',
    category: 'implants',
    duration: '45 mins',
    startingPriceInr: 5000,
    startingPriceUsd: 70,
    shortDesc: '',
    fullDesc: '',
    technologyUsed: ['Class B Autoclave', 'Digital Imaging'],
    benefits: ['Painless procedure', 'Long lasting'],
    painLevel: 'Zero / Painless',
    icon: '🦷',
    procedureSteps: [],
    afterCareTips: []
  });

  // TAB 2: Timing
  const [timingForm, setTimingForm] = useState({
    isOpenToday: hospitalStatus.isOpenToday,
    operatingHours: hospitalStatus.operatingHours,
    bannerNotice: hospitalStatus.bannerNotice,
    dailySlotCap: hospitalStatus.dailySlotCap,
    newHoliday: ''
  });
  const [timingSavedNotice, setTimingSavedNotice] = useState(false);

  // TAB 3: Bookings
  const [bookingSearch, setBookingSearch] = useState('');
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>('all');

  // TAB 4: CMS / Blog
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({
    title: '',
    titleHi: '',
    slug: '',
    category: 'Dental Implants',
    readTime: '5 min read',
    authorDoctor: 'Dr. Himangi Dubey',
    authorRole: 'Founder & Chief Dental Surgeon',
    summary: '',
    summaryHi: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    focusKeywords: ['dental clinic lucknow', 'dental implants'],
    imageUrl: '/images/hope/real_clinic_7_.jpg',
    tags: ['Dental Health', 'Lucknow'],
    date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  });
  const [keywordsInput, setKeywordsInput] = useState('dental clinic lucknow, dental implants');
  const [blogSuccessNotice, setBlogSuccessNotice] = useState(false);

  // Handlers for Services
  const handleOpenAddService = () => {
    setEditingTreatment(null);
    setServiceForm({
      id: `treatment-${Date.now()}`,
      title: '',
      titleHi: '',
      category: 'implants',
      duration: '45 mins',
      startingPriceInr: 3000,
      startingPriceUsd: 40,
      shortDesc: '',
      fullDesc: '',
      technologyUsed: ['Class B Autoclave', 'Digital Imaging'],
      benefits: ['Fast recovery', 'NABH sterile standards'],
      painLevel: 'Zero / Painless',
      icon: '🦷',
      procedureSteps: [],
      afterCareTips: []
    });
    setIsServiceModalOpen(true);
  };

  const handleOpenEditService = (t: Treatment) => {
    setEditingTreatment(t);
    setServiceForm({ ...t });
    setIsServiceModalOpen(true);
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.title?.trim()) return;

    if (editingTreatment) {
      updateTreatment(serviceForm as Treatment);
    } else {
      const newTreatment: Treatment = {
        ...serviceForm,
        id: serviceForm.id || `treatment-${Date.now()}`,
        titleHi: serviceForm.titleHi || serviceForm.title || '',
        shortDesc: serviceForm.shortDesc || '',
        shortDescHi: serviceForm.shortDesc || '',
        fullDesc: serviceForm.fullDesc || serviceForm.shortDesc || '',
        duration: serviceForm.duration || '45 mins',
        category: serviceForm.category || 'implants',
        painLevel: serviceForm.painLevel || 'Zero / Painless',
        startingPriceInr: Number(serviceForm.startingPriceInr) || 1000,
        startingPriceUsd: Number(serviceForm.startingPriceUsd) || 20,
        technologyUsed: serviceForm.technologyUsed || ['Digital Sterilization'],
        benefits: serviceForm.benefits || ['Painless treatment'],
        icon: serviceForm.icon || '🦷',
        procedureSteps: [],
        afterCareTips: []
      } as Treatment;
      addTreatment(newTreatment);
    }
    setIsServiceModalOpen(false);
  };

  const handleDeleteService = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete procedure: "${title}"?`)) {
      deleteTreatment(id);
    }
  };

  // Handlers for Timing & Availability
  const handleSaveTiming = (e: React.FormEvent) => {
    e.preventDefault();
    updateHospitalStatus({
      isOpenToday: timingForm.isOpenToday,
      operatingHours: timingForm.operatingHours,
      bannerNotice: timingForm.bannerNotice,
      dailySlotCap: Number(timingForm.dailySlotCap) || 35
    });
    setTimingSavedNotice(true);
    setTimeout(() => setTimingSavedNotice(false), 3000);
  };

  const handleAddHoliday = () => {
    if (!timingForm.newHoliday.trim()) return;
    const updatedHolidays = [...(hospitalStatus.holidays || []), timingForm.newHoliday.trim()];
    updateHospitalStatus({ holidays: updatedHolidays });
    setTimingForm(prev => ({ ...prev, newHoliday: '' }));
  };

  const handleRemoveHoliday = (holidayStr: string) => {
    const updated = (hospitalStatus.holidays || []).filter(h => h !== holidayStr);
    updateHospitalStatus({ holidays: updated });
  };

  // Handlers for Blog
  const handleOpenAddBlog = () => {
    setEditingBlog(null);
    setBlogForm({
      id: `blog-${Date.now()}`,
      title: '',
      titleHi: '',
      slug: '',
      category: 'Dental Implants',
      readTime: '4 min read',
      authorDoctor: 'Dr. Himangi Dubey',
      authorRole: 'Founder & Chief Dental Surgeon',
      summary: '',
      summaryHi: '',
      content: '',
      metaTitle: '',
      metaDescription: '',
      imageUrl: '/images/hope/real_clinic_7_.jpg',
      tags: ['Hope Dental', 'Oral Health'],
      views: 120,
      likesCount: 15,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    });
    setKeywordsInput('dental clinic lucknow, tooth pain remedies');
    setIsBlogModalOpen(true);
  };

  const handleOpenEditBlog = (b: BlogPost) => {
    setEditingBlog(b);
    setBlogForm({ ...b });
    setKeywordsInput((b.focusKeywords || []).join(', '));
    setIsBlogModalOpen(true);
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title?.trim()) return;

    const splittedKeywords = keywordsInput.split(',').map(s => s.trim()).filter(Boolean);
    const slug = blogForm.slug || blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const completePost: BlogPost = {
      id: blogForm.id || `blog-${Date.now()}`,
      slug,
      title: blogForm.title || '',
      titleHi: blogForm.titleHi || blogForm.title || '',
      summary: blogForm.summary || '',
      summaryHi: blogForm.summaryHi || blogForm.summary || '',
      content: blogForm.content || '',
      category: blogForm.category || 'General Dentistry',
      readTime: blogForm.readTime || '5 min read',
      authorDoctor: blogForm.authorDoctor || 'Dr. Himangi Dubey',
      authorRole: blogForm.authorRole || 'Founder & Chief Dental Surgeon',
      date: blogForm.date || 'Today',
      tags: blogForm.tags || ['Hope Dental'],
      imageUrl: blogForm.imageUrl || '/images/hope/real_clinic_7_.jpg',
      views: blogForm.views || 50,
      likesCount: blogForm.likesCount || 10,
      metaTitle: blogForm.metaTitle || `${blogForm.title} | Hope Dental Hospital Lucknow`,
      metaDescription: blogForm.metaDescription || blogForm.summary?.slice(0, 160) || '',
      focusKeywords: splittedKeywords
    };

    if (editingBlog) {
      updateBlogPost(completePost);
    } else {
      addBlogPost(completePost);
    }

    setIsBlogModalOpen(false);
    setBlogSuccessNotice(true);
    setTimeout(() => setBlogSuccessNotice(false), 3500);
  };

  const handleDeleteBlog = (id: string, title: string) => {
    if (confirm(`Delete blog post: "${title}"?`)) {
      deleteBlogPost(id);
    }
  };

  // Filtered Treatments
  const filteredTreatments = treatments.filter(t => 
    t.title.toLowerCase().includes(serviceSearch.toLowerCase()) ||
    t.category.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  // Filtered Appointments
  const filteredAppointments = appointments.filter(a => {
    const matchesSearch = 
      a.patientName.toLowerCase().includes(bookingSearch.toLowerCase()) ||
      a.patientPhone.includes(bookingSearch) ||
      a.id.toLowerCase().includes(bookingSearch.toLowerCase()) ||
      (a.patientLocation && a.patientLocation.toLowerCase().includes(bookingSearch.toLowerCase()));

    const matchesStatus = 
      bookingFilterStatus === 'all' ? true : a.status.toLowerCase() === bookingFilterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // =========================================================================
  // VIEW 1: SECURE PRODUCTION LOGIN GATE (WHEN NOT AUTHENTICATED)
  // =========================================================================
  if (!isLoggedIn) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4 sm:p-6 text-white font-sans relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(13, 148, 136, 0.22) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(6, 182, 212, 0.15) 0%, transparent 40%), linear-gradient(135deg, #07192b 0%, #0a243e 50%, #0d3455 100%)'
        }}
      >
        <div className="w-full max-w-md bg-[#091e34]/95 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6 relative z-10 animate-fadeIn">
          
          {/* Logo & Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-400 flex items-center justify-center mx-auto shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-teal-400">
                HOPE DENTAL HOSPITAL & WELLNESS CENTRE
              </div>
              <h2 className="text-2xl font-black text-white mt-1">
                Clinical Admin Gateway
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Restricted portal for authorized hospital surgeons, OPD managers & administration.
              </p>
            </div>
          </div>

          {/* Lockout Banner */}
          {lockoutSeconds > 0 && (
            <div className="p-3.5 rounded-2xl bg-rose-950/80 border border-rose-500/50 flex items-start space-x-2.5 text-xs text-rose-200">
              <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-rose-300">Security Lockout Active</strong>
                <span>Repeated failed login attempts detected. Retry allowed in <strong>{lockoutSeconds} seconds</strong>.</span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {loginError && lockoutSeconds <= 0 && (
            <div className="p-3.5 rounded-2xl bg-rose-950/70 border border-rose-500/40 text-xs text-rose-200 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            
            {/* Username / Email */}
            <div className="space-y-1">
              <label className="font-bold text-slate-300 flex items-center space-x-1.5">
                <UserCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Admin Email or Username</span>
              </label>
              <input 
                type="text"
                required
                disabled={lockoutSeconds > 0 || loginLoading}
                placeholder="admin@hopedental.com"
                value={loginIdentifier}
                onChange={(e) => setLoginIdentifier(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="font-bold text-slate-300 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <Lock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Master Password</span>
                </span>
                <span className="text-[10px] text-teal-400/80">SHA-256 Protected</span>
              </label>

              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  required
                  disabled={lockoutSeconds > 0 || loginLoading}
                  placeholder="••••••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center space-x-2 text-slate-300 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500 bg-slate-900 border-slate-700"
                />
                <span>Remember this terminal (8 hrs)</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={lockoutSeconds > 0 || loginLoading}
              className={`w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all ${
                lockoutSeconds > 0 || loginLoading
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white shadow-teal-500/25 active:scale-98'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>{loginLoading ? 'Verifying Credentials...' : 'Authenticate & Enter Portal'}</span>
            </button>
          </form>

          {/* Quick Demo Fill Helper Pill */}
          <div className="p-3 rounded-2xl bg-teal-950/40 border border-teal-800/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <div className="text-left">
              <div className="text-[10px] font-bold text-teal-300 uppercase">Default Master Credentials:</div>
              <div className="text-[11px] text-slate-300 font-mono mt-0.5">
                {DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}
              </div>
            </div>

            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="px-3 py-1.5 rounded-lg bg-teal-600/30 hover:bg-teal-600 text-teal-200 hover:text-white font-bold text-[11px] border border-teal-500/40 transition-colors flex items-center space-x-1 shrink-0"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Quick Demo Fill</span>
            </button>
          </div>

          {/* Return to website */}
          <div className="pt-2 text-center border-t border-slate-800">
            <button
              onClick={() => navigateTo('home')}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center justify-center space-x-1 mx-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Hope Dental Public Site</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20 animate-fadeIn">
      
      {/* 1. ADMIN HEADER WITH PROFILE & LOGOUT */}
      <header className="bg-[#07192b] border-b border-teal-900/50 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-lg font-black text-white">
                  Hope Dental Hospital — Admin Portal
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Authenticated
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Logged in as <strong className="text-teal-300">{session?.email || 'admin@hopedental.com'}</strong> · {session?.role || 'Senior Medical Administrator'}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setIsChangePasswordOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
              title="Change Master Admin Password"
            >
              <Lock className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">Change Password</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-xl bg-rose-950/70 hover:bg-rose-900 text-rose-200 border border-rose-800 text-xs font-bold transition-colors flex items-center space-x-1.5"
              title="End Secure Session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>

            <button
              onClick={() => navigateTo('home')}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center space-x-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Public Site</span>
            </button>
          </div>

        </div>

        {/* Admin Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-2 border-t border-slate-800 overflow-x-auto">
          {[
            { id: 'services', label: '1. Services & Pricing', icon: DollarSign },
            { id: 'timing', label: '2. Clinic Timing & Status', icon: Clock },
            { id: 'bookings', label: '3. Booking Dashboard', icon: Calendar },
            { id: 'cms', label: '4. Blog / CMS Module', icon: FileText },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-3 px-4 font-bold text-xs flex items-center space-x-2 border-b-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-teal-400 text-teal-300 bg-teal-950/30'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* Global Toast notifications */}
        {timingSavedNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center space-x-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Clinic operational timings & homepage status notice updated successfully!</span>
          </div>
        )}

        {blogSuccessNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center space-x-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Blog article & SEO metadata saved successfully into clinic repository!</span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 1: SERVICE & PRICING MANAGEMENT                                      */}
        {/* ========================================================================= */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0a1e33] p-5 rounded-2xl border border-teal-900/40">
              <div>
                <h2 className="text-base font-black text-white">
                  Dental Procedures & Pricing Catalog
                </h2>
                <p className="text-xs text-slate-400">
                  Manage procedure charges, duration, and patient consultation fees displayed across the site and booking wizard.
                </p>
              </div>

              <button
                onClick={handleOpenAddService}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold text-xs shadow-md flex items-center space-x-2 self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Add Procedure / Service</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search treatments by name or category (e.g., implants, laser, RCT)..."
                value={serviceSearch}
                onChange={(e) => setServiceSearch(e.target.value)}
                className="bg-transparent text-xs text-white placeholder:text-slate-400 focus:outline-none w-full"
              />
            </div>

            {/* Treatments Table */}
            <div className="bg-[#07192b] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#091e34] text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">Procedure Title</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Starting Fee (INR)</th>
                      <th className="py-3.5 px-4">Duration</th>
                      <th className="py-3.5 px-4">Pain Level</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredTreatments.map(t => (
                      <tr key={t.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-white">
                          <div className="flex items-center space-x-2">
                            <span>{t.icon || '🦷'}</span>
                            <div>
                              <div>{t.title}</div>
                              {t.titleHi && <div className="text-[10px] text-slate-400 font-normal">{t.titleHi}</div>}
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-teal-950 text-teal-300 border border-teal-800">
                            {t.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                          ₹{t.startingPriceInr.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300">{t.duration}</td>
                        <td className="py-3.5 px-4 text-slate-400">{t.painLevel}</td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => handleOpenEditService(t)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-teal-900/60 text-slate-300 hover:text-teal-300 transition-colors"
                              title="Edit Procedure"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteService(t.id, t.title)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-300 transition-colors"
                              title="Delete Procedure"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CLINIC TIMING & AVAILABILITY                                      */}
        {/* ========================================================================= */}
        {activeTab === 'timing' && (
          <form onSubmit={handleSaveTiming} className="space-y-6 max-w-4xl">
            
            <div className="bg-[#0a1e33] p-5 rounded-2xl border border-teal-900/40">
              <h2 className="text-base font-black text-white">
                Clinic Timing, Daily Capacity & Live Homepage Ticker
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Control the real-time operational status shown to website visitors, online booking caps, and holiday closures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Clinic Open/Closed Toggle */}
              <div className="bg-[#07192b] p-6 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
                  TODAY'S OPERATIONAL STATUS
                </span>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio"
                      name="openStatus"
                      checked={timingForm.isOpenToday === true}
                      onChange={() => setTimingForm(prev => ({ ...prev, isOpenToday: true }))}
                      className="text-emerald-500 focus:ring-emerald-400"
                    />
                    <span className="text-xs font-bold text-emerald-400">🟢 Open Today</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio"
                      name="openStatus"
                      checked={timingForm.isOpenToday === false}
                      onChange={() => setTimingForm(prev => ({ ...prev, isOpenToday: false }))}
                      className="text-rose-500 focus:ring-rose-400"
                    />
                    <span className="text-xs font-bold text-rose-400">🔴 Closed Today</span>
                  </label>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-bold text-slate-300">
                    Clinic Operational Hours
                  </label>
                  <input 
                    type="text"
                    value={timingForm.operatingHours}
                    onChange={(e) => setTimingForm(prev => ({ ...prev, operatingHours: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500"
                  />
                  <span className="text-[10px] text-slate-500">
                    Example: 10:00 AM – 8:00 PM (Monday – Sunday)
                  </span>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-bold text-slate-300">
                    Daily Online Booking Slot Cap
                  </label>
                  <input 
                    type="number"
                    value={timingForm.dailySlotCap}
                    onChange={(e) => setTimingForm(prev => ({ ...prev, dailySlotCap: Number(e.target.value) }))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500"
                  />
                  <span className="text-[10px] text-slate-500">
                    Daily ceiling for online appointments (default: 35 seats).
                  </span>
                </div>
              </div>

              {/* Card 2: Homepage Status Banner Notice */}
              <div className="bg-[#07192b] p-6 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
                  HOMEPAGE LIVE STATUS NOTICE TEXT
                </span>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Live Banner Text (Displays on top of Homepage)
                  </label>
                  <textarea 
                    rows={3}
                    value={timingForm.bannerNotice}
                    onChange={(e) => setTimingForm(prev => ({ ...prev, bannerNotice: e.target.value }))}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500"
                  />
                  <span className="text-[10px] text-slate-500">
                    Example: "🟢 Hospital Open Today · 10:00 AM – 8:00 PM · Walk-ins & Priority Online Slots Active"
                  </span>
                </div>

                {/* Holiday manager */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <label className="text-xs font-bold text-slate-300">
                    Clinic Holidays & Scheduled Closures
                  </label>
                  
                  <div className="flex space-x-2">
                    <input 
                      type="text"
                      placeholder="e.g. 2026-10-24 (Diwali Festival)"
                      value={timingForm.newHoliday}
                      onChange={(e) => setTimingForm(prev => ({ ...prev, newHoliday: e.target.value }))}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddHoliday}
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold whitespace-nowrap"
                    >
                      Add
                    </button>
                  </div>

                  <div className="space-y-1.5 max-h-32 overflow-y-auto pt-1">
                    {(hospitalStatus.holidays || []).map((h, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 text-xs">
                        <span className="text-slate-300">{h}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveHoliday(h)}
                          className="text-rose-400 hover:text-rose-300 font-bold text-xs"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Clinic Timing & Availability</span>
              </button>
            </div>

          </form>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: BOOKING DASHBOARD & PATIENT CONTACT LOGS                            */}
        {/* ========================================================================= */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            
            <div className="bg-[#0a1e33] p-5 rounded-2xl border border-teal-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-black text-white">
                  Daily Bookings & Patient Contact Logs
                </h2>
                <p className="text-xs text-slate-400">
                  Review real-time patient appointment records, token queues, and update consultation statuses.
                </p>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                  Total Bookings: <strong className="text-white">{appointments.length}</strong>
                </span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 flex items-center space-x-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <Search className="w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search by Patient Name, Phone, Location (e.g. Sitapur) or Token ID..."
                  value={bookingSearch}
                  onChange={(e) => setBookingSearch(e.target.value)}
                  className="bg-transparent text-xs text-white placeholder:text-slate-400 focus:outline-none w-full"
                />
              </div>

              <div>
                <select
                  value={bookingFilterStatus}
                  onChange={(e) => setBookingFilterStatus(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none"
                >
                  <option value="all">All Appointment Statuses</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="rescheduled">Rescheduled</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-[#07192b] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#091e34] text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">Token & ID</th>
                      <th className="py-3.5 px-4">Patient Contact Details</th>
                      <th className="py-3.5 px-4">Type</th>
                      <th className="py-3.5 px-4">Date & Slot</th>
                      <th className="py-3.5 px-4">Service & Fee</th>
                      <th className="py-3.5 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredAppointments.map(a => (
                      <tr key={a.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-mono font-bold text-teal-300">{a.id}</div>
                          <div className="text-[10px] text-slate-400">{a.estimatedTokenTime || 'Token Active'}</div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white text-sm">{a.patientName}</div>
                          <div className="text-slate-400 flex items-center space-x-2 mt-0.5">
                            <span className="flex items-center">
                              <Phone className="w-3 h-3 mr-1 text-teal-400" />
                              <a href={`tel:${a.patientPhone}`} className="hover:underline text-slate-300">{a.patientPhone}</a>
                            </span>
                            <span>•</span>
                            <span className="flex items-center text-slate-400">
                              <MapPin className="w-3 h-3 mr-1 text-teal-400" />
                              <span>{a.patientLocation || 'Sitapur'}</span>
                            </span>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            a.patientType === 'old' 
                              ? 'bg-blue-950 text-blue-300 border border-blue-800'
                              : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          }`}>
                            {a.patientType === 'old' ? 'Old Patient' : 'New Patient'}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white">{a.date}</div>
                          <div className="text-[10px] text-teal-300">{a.timeSlot}</div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="text-white font-medium">{a.serviceName || 'Consultation'}</div>
                          <div className="text-emerald-400 font-bold text-[11px]">₹{a.servicePrice || a.amount || 1000}</div>
                        </td>

                        <td className="py-3.5 px-4">
                          <select
                            value={a.status}
                            onChange={(e) => updateAppointmentStatus(a.id, e.target.value as Appointment['status'])}
                            className={`px-2 py-1 rounded-lg text-xs font-bold border ${
                              a.status === 'Confirmed'
                                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700'
                                : a.status === 'Completed'
                                ? 'bg-blue-950/80 text-blue-300 border-blue-700'
                                : a.status === 'Cancelled'
                                ? 'bg-rose-950/80 text-rose-300 border-rose-700'
                                : 'bg-amber-950/80 text-amber-300 border-amber-700'
                            }`}
                          >
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Rescheduled">Rescheduled</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: BLOG / CMS MODULE WITH SEO METADATA                                */}
        {/* ========================================================================= */}
        {activeTab === 'cms' && (
          <div className="space-y-6">
            
            <div className="bg-[#0a1e33] p-5 rounded-2xl border border-teal-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-black text-white">
                  Clinic Health Articles & CMS Module
                </h2>
                <p className="text-xs text-slate-400">
                  Draft and publish clinical articles with full SEO meta tags and keywords for search engine ranking.
                </p>
              </div>

              <button
                onClick={handleOpenAddBlog}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold text-xs shadow-md flex items-center space-x-2 self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Draft New Article</span>
              </button>
            </div>

            {/* Articles List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogs.map(b => (
                <div 
                  key={b.id}
                  className="bg-[#07192b] rounded-2xl border border-slate-800 p-5 flex flex-col justify-between space-y-4 shadow-lg hover:border-teal-500/50 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-teal-400 font-bold uppercase">
                      <span>{b.category}</span>
                      <span className="text-slate-400">{b.date}</span>
                    </div>

                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                      {b.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {b.summary}
                    </p>

                    {b.focusKeywords && b.focusKeywords.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1">
                        {b.focusKeywords.slice(0, 3).map((kw, i) => (
                          <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 text-[11px]">{b.authorDoctor}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleOpenEditBlog(b)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-teal-900/60 text-slate-300 hover:text-teal-300 transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(b.id, b.title)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-300 transition-colors"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* MODAL: CHANGE MASTER ADMIN PASSWORD                                      */}
      {/* ========================================================================= */}
      {isChangePasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#091e34] border border-teal-800/60 rounded-3xl p-6 sm:p-7 w-full max-w-md text-white space-y-5 my-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-teal-400" />
                <h3 className="text-base font-black text-white">
                  Change Master Admin Password
                </h3>
              </div>
              <button 
                onClick={() => {
                  setIsChangePasswordOpen(false);
                  setChangePasswordMsg(null);
                }}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {changePasswordMsg && (
              <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
                changePasswordMsg.type === 'success' 
                  ? 'bg-emerald-950 border border-emerald-500/50 text-emerald-200' 
                  : 'bg-rose-950 border border-rose-500/50 text-rose-200'
              }`}>
                {changePasswordMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                <span>{changePasswordMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleChangePasswordSubmit} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-300">Current Password *</label>
                <input 
                  type="password"
                  required
                  placeholder="Enter current password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">New Password (Min. 8 chars) *</label>
                <input 
                  type="password"
                  required
                  placeholder="Enter new strong password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Confirm New Password *</label>
                <input 
                  type="password"
                  required
                  placeholder="Repeat new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsChangePasswordOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: ADD / EDIT PROCEDURE & PRICING                                     */}
      {/* ========================================================================= */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#091e34] border border-teal-800/60 rounded-3xl p-6 sm:p-7 w-full max-w-xl text-white space-y-5 my-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-black text-white">
                {editingTreatment ? 'Edit Dental Procedure & Fee' : 'Add New Dental Procedure'}
              </h3>
              <button 
                onClick={() => setIsServiceModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveService} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Procedure Title (English) *</label>
                  <input 
                    type="text"
                    required
                    value={serviceForm.title || ''}
                    onChange={(e) => setServiceForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g. Single Tooth Dental Implant"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Title (Hindi)</label>
                  <input 
                    type="text"
                    value={serviceForm.titleHi || ''}
                    onChange={(e) => setServiceForm(prev => ({ ...prev, titleHi: e.target.value }))}
                    placeholder="e.g. सिंगल टूथ डेंटल इम्प्लांट"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Category</label>
                  <select
                    value={serviceForm.category}
                    onChange={(e) => setServiceForm(prev => ({ ...prev, category: e.target.value as Treatment['category'] }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="implants">Implants</option>
                    <option value="cosmetic">Cosmetic</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="endodontics">Endodontics (RCT)</option>
                    <option value="periodontics">Periodontics (Laser)</option>
                    <option value="surgery">Oral Surgery</option>
                    <option value="pediatric">Pediatric</option>
                    <option value="laser">Laser Care</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Starting Fee (INR ₹) *</label>
                  <input 
                    type="number"
                    required
                    value={serviceForm.startingPriceInr || 1000}
                    onChange={(e) => setServiceForm(prev => ({ ...prev, startingPriceInr: Number(e.target.value) }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Duration</label>
                  <input 
                    type="text"
                    value={serviceForm.duration || '45 mins'}
                    onChange={(e) => setServiceForm(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Short Summary / Description</label>
                <textarea 
                  rows={2}
                  value={serviceForm.shortDesc || ''}
                  onChange={(e) => setServiceForm(prev => ({ ...prev, shortDesc: e.target.value }))}
                  placeholder="Brief explanation for patients..."
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsServiceModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md"
                >
                  Save Procedure
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: DRAFT & PUBLISH ARTICLE (CMS + SEO METADATA)                      */}
      {/* ========================================================================= */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#091e34] border border-teal-800/60 rounded-3xl p-6 sm:p-7 w-full max-w-2xl text-white space-y-5 my-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-black text-white">
                  {editingBlog ? 'Edit Clinical Blog Post' : 'Draft New Clinic Health Article'}
                </h3>
                <p className="text-[11px] text-slate-400">
                  Rich content editor with auto-updating SEO meta title and indexing tags.
                </p>
              </div>
              <button 
                onClick={() => setIsBlogModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Article Title (English) *</label>
                  <input 
                    type="text"
                    required
                    value={blogForm.title || ''}
                    onChange={(e) => setBlogForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g. Modern Full-Arch Implants in Lucknow"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Category</label>
                  <input 
                    type="text"
                    value={blogForm.category || 'Dental Implants'}
                    onChange={(e) => setBlogForm(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="e.g. Laser Dentistry, Implants, Orthodontics"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Author Doctor</label>
                  <select
                    value={blogForm.authorDoctor}
                    onChange={(e) => setBlogForm(prev => ({ ...prev, authorDoctor: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="Dr. Himangi Dubey">Dr. Himangi Dubey (Founder & Chief Surgeon)</option>
                    <option value="Dr. M. S. Bhoj">Dr. M. S. Bhoj (Senior Consultant OMFS)</option>
                    <option value="Senior Dental Specialist Panel">Senior Dental Specialist Panel</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Read Time</label>
                  <input 
                    type="text"
                    value={blogForm.readTime || '4 min read'}
                    onChange={(e) => setBlogForm(prev => ({ ...prev, readTime: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Summary / Excerpt</label>
                <textarea 
                  rows={2}
                  value={blogForm.summary || ''}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, summary: e.target.value }))}
                  placeholder="Key highlight for blog cards..."
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Full Article Content</label>
                <textarea 
                  rows={6}
                  value={blogForm.content || ''}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Draft rich article text, clinical explanations, patient guidelines..."
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* SEO Ranking Metadata Section */}
              <div className="p-4 rounded-2xl bg-[#061423] border border-teal-900/60 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-teal-400 block">
                  SEO METADATA & SITEMAP RANKING CONFIGURATION
                </span>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Meta Title</label>
                  <input 
                    type="text"
                    value={blogForm.metaTitle || ''}
                    onChange={(e) => setBlogForm(prev => ({ ...prev, metaTitle: e.target.value }))}
                    placeholder="e.g. Best Dental Implants in Lucknow | Hope Dental Hospital"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Meta Description</label>
                  <input 
                    type="text"
                    value={blogForm.metaDescription || ''}
                    onChange={(e) => setBlogForm(prev => ({ ...prev, metaDescription: e.target.value }))}
                    placeholder="High-conversion 150-160 character snippet for Google search results..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Focus SEO Keywords (comma-separated)</label>
                  <input 
                    type="text"
                    value={keywordsInput}
                    onChange={(e) => setKeywordsInput(e.target.value)}
                    placeholder="e.g. dental implants lucknow, painless dentist sadrauna, best rct specialist"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold text-xs shadow-md"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
