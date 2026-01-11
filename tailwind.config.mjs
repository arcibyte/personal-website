/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5", 
        
        foreground: "#001B2EB3",
        
        primary: {
          DEFAULT: "#001B2E", 
        },

        accent: "#FEB05D",
      },
      boxShadow: {
        'neo': '8px 8px 0px 0px #001B2E',
        'neo-sm': '4px 4px 0px 0px #001B2E',
        'neo-hover': '2px 2px 0px 0px #001B2E',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};