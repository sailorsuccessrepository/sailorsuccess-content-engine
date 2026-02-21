module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A2540', light: '#1B3A5C', dark: '#061827' },
        red:  { DEFAULT: '#C41E3A', hover: '#A51830' },
      },
      fontFamily: {
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
      },
      backdropBlur: { glass: '24px', heavy: '40px', nav: '20px' },
      borderRadius: { pill: '100px', xl2: '28px' },
      boxShadow: {
        glass:  '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        float:  '0 22px 70px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)',
        red:    '0 8px 30px rgba(196,30,58,0.35)',
        soft:   '0 2px 12px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};
