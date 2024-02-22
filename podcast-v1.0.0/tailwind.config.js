const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      header: ["Oswald", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#F7BD14",
        secondary: "#2A3A5A",
        dark: "#161616",
        brand: {
          50: "#e2d9d4",
          100: "#DBD0CA ",
          200: "#DCCBBC",
          300: "#BA9778",
          400: "#7D5D41",
          500: "#c0c4ce",
          600: "#825c3c",
        },
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
      },

      boxShadow: {
        xl: "0 5px 12px rgba(0, 0, 0, 0.16)",
      },

      borderWidth: {
        10: "10px",
        20: "20px",
        50: "50px",
      },

      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
