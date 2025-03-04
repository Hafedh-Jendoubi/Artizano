/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/background.png')",
      },
      fontSize: {
        navSize: '21px',
        selectedPageSize : "30px",
        bodySize: "24px",
        buttonSize : "17px",
        smallButtonSize:"15px",
        footerTitle:"120px",
        footerSubTitles: "48px",
        footerQuote : "40px",
        smallFooterTitleText:"30px"
      },
      fontFamily: {
        'arial': ["Arial"],
      },
      spacing: {
        '43': '43px',
      },
      colors : {
        Rosy :"#AE6565" ,
        grenat : "#5B1616",
        white : "#FFFFFF" ,
        notification_yellow : "#E4C087",
        bgNumbers_yellow : "#F6EFBD",
        greyText : "#514B4B",
        greyBg : "#D9D9D9"
      },
      borderRadius: {
        'input-radius': '40px',
        'video-input-radius':"50px",
        "button-radius":"30px"
      },
      width: {
        'input-size': '799px',
      },
      height: {
        'input-size': '62px',
      },
    },
  },
  plugins: [],
}

