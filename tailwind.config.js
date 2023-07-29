/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Magenta": "hsl(300, 43%, 22%)",
        "Soft-Pink": "hsl(333, 80%, 67%)",
        "Dark-Grayish-Magenta": "hsl(303, 10%, 53%)",
        "Light-Grayish-Magenta": "hsl(300, 24%, 96%)",
      },

      backgroundImage: {
        "mobile-top":
          "url('/social-proof-section-master/images/bg-pattern-top-mobile.svg')",
        "mobile-bot":
          "url('/social-proof-section-master/images/bg-pattern-bottom-mobile.svg')",
        "desktop-top":
          "url('/social-proof-section-master/images/bg-pattern-top-desktop.svg')",
        "desktop-bot":
          "url('/social-proof-section-master/images/bg-pattern-bottom-desktop.svg')",
      },
    },
  },
  plugins: [],
};
