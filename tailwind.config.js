// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg_page: "#EFF2F5",
        bg_searchFB: "#EFF2F5",
        menu_active: "#1B77F2",
        menu_top_right: "#E4E6EB",
        menu_top_right_hover: "#D7DADE",
        content_menu_hover: "#D7DADE",
        facebook_blue: "#1976F2",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
