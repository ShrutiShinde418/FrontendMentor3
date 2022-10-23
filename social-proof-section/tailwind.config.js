/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        magenta: "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "d-grayish-magenta": "hsl(303, 10%, 53%)",
        "l-grayish-magenta": "hsl(300, 24%, 96%)",
      },
      fontFamily: {
        custom: "League Spartan",
      },
    },
  },
  plugins: [],
};
