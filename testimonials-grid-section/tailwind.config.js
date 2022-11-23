/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(263, 55%, 52%)",
        "grayish-blue": "hsl(217, 19%, 35%)",
        "blackish-blue": "hsl(219, 29%, 14%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
        "light-gray": "hsl(0, 0%, 81%)",
      },
      fontFamily: {
        custom: "Barlow Semi Condensed",
      },
      fontSize: {
        vlg: "1.45rem",
      },
    },
  },
  plugins: [],
};
