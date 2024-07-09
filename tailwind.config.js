/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#cfaa90",
        "bg-secondary": "#1a2829",
        "bg-light": "#f6efeb",
        "bg-primary-darker": "#c08f6c",
        "bg-light-darker": "#f0e4dd",
        "bg-muted": "#6c757d",
        "bs-dark": "#141518",
        "bs-white": "rgb(255, 255, 255)",
        "bs-red": 'rgb(255, 92, 93)',
        "bs-gray": 'rgb(151, 151, 151)',
      },

      screens: {
        xlg: "1200px",
        lmd: "840px",
        "xxxs": "420px",
        xxs: "400px"
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/1.jpg')",
        'footer-texture': "url('/path/to/your/image2.png')",
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 2s ease-in-out 2s', // delay by 2 seconds
      },
    },
  },
  plugins: [],
};
