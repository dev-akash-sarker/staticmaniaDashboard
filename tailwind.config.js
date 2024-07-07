module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // or 'media' or 'class'
  theme: {
    colors: {
      primary_bg: "var(--primary-bg)",
      secondary_bg: "var(--secondary-bg)",
      stats_bg: "var(--stats-bg)",
      stats_solid_bg: "var(--stats-solid-bg)",
      cart_bg: "var(--cart-bg)",
      train_bg: "var(--train-bg)",
      housing_bg: "var(--housing-bg)",
      food_bg: "var(--food-bg)",
      entertainment_bg: "var(--entertainment-bg)",
      bars_bg: "var(--bars-bg)",
      common_bg: "var(--common-bg)",
      primary_color: "var(--primary-color)",
      secondary_color: "var(--secondary-color)",
      nav_text_color: "var(--nav-text-color)",
      common_text_color: "var(--common-text-color)",
      white: "var(--white)",
      black: "var(--black)",
    },
    fontFamily: {
      poppins_regular: ["poppins-regular"],
      poppins_medium: ["poppins-medium"],
      poppins_semibold: ["poppins-semibold"],
      poppins_bold: ["poppins-bold"],
      avenir_regular: ["Avenir Next LT Pro Regular"],
      avenir_italic: ["Avenir Next LT Pro Italic"],
      avenir_bold: ["Avenir Next LT Pro Bold"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
