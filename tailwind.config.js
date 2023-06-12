/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pfdinmono: ["PFDinMono", "sans-serif"],
        belleza: ["Belleza", "sans-serif"],
        arabic: ["Droid Arabic Kufi", "sans-serif"],
      },
      backgroundImage: {
        aboutBackground:
          "url('./src/assets/Website-20230527T011956Z-001/Website/About us/About us Assets/testUpper banner customed img.png')",
        articleBackground:
          "url('./src/assets/Website-20230527T011956Z-001/Website/About us/About us Assets/mid area shape eithout.png')",
        contactBackground:
          "url('./src/assets/Website-20230527T011956Z-001/Website/contact/Contact us-assets/1upper banner img.png')",
        hotelLangley:
          "url('./src/assets/Website-20230527T011956Z-001/Website/Amenities/Assets/12construction-concept-with-engineering-tools.png')",
        hotelLibrary:
          "url('./src/assets/Website-20230527T011956Z-001/Website/Amenities/Assets/white-brush-stroke-texture-background copy4.png')",
        hotelLibraryWhite:
          "url('./src/assets/Website-20230527T011956Z-001/Website/Amenities/Assets/white-brush-stroke-texture-background copy.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#69727d",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
