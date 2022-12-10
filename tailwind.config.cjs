/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      title: ['Flix', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },

    extend: {
      colors: {
        light: '#f3f4f6',
        dark: '#242424',

        primary: {
          DEFAULT: '#99a8ff',
          50: '#cbdaff',
          100: '#c1d0ff',
          200: '#b7c6ff',
          300: '#adbcff',
          400: '#a3b2ff',
          500: '#99a8ff',
          600: '#8f9ef5',
          700: '#8594eb',
          800: '#7b8ae1',
          900: '#7180d7',
        },

        secondary: {
          DEFAULT: '#ed8e15',
          50: '#ffc047',
          100: '#ffb63d',
          200: '#ffac33',
          300: '#ffa229',
          400: '#f7981f',
          500: '#ed8e15',
          600: '#e3840b',
          700: '#d97a01',
          800: '#cf7000',
          900: '#c56600',
        },
      },

      gridTemplateRows: {
        mobile: 'auto minmax(0, 1fr)',
      },

      gridTemplateColumns: {
        tablet: '100px 1fr',
        desktop: '300px 1fr',
      },
    },
  },
  plugins: [],
}
