export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // colors: {
    //   background: "#E5E7EB",
    // },
  },
  plugins: [require("@tailwindcss/forms")],
};
