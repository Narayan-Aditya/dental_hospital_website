/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        fms: {
          navy: '#0b1f3a',
          blue: '#163864',
          teal: '#0d9488',
          cyan: '#06b6d4',
          gold: '#c5a059',
          goldLight: '#fbf7ee',
          slate: '#101826',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
        },
        brand: {
          cyan: '#06b6d4',
          teal: '#0d9488',
          navy: '#0b1f3a',
          emerald: '#059669',
          amber: '#f59e0b',
          rose: '#e11d48',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        display: ['"Manrope"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(13, 148, 136, 0.08)',
        'glow': '0 0 25px rgba(13, 148, 136, 0.25)',
        'card-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
      },
      screens: {
        'xs': '420px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.2s ease-out forwards',
        'slideInRight': 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
