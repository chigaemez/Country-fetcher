/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants:{
    extends:{
      display:['group-focus']
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#3e58a7",
        primary2:"#0EBA39",
        primary3: "#086820FC",  
        primary4: "#8CCE9D38",
        primary5: "#FAFAFA",
        outline1: "#8CCE9D"
    },
    height: {
      "1/7": "14.285714%",
      "2/7": "28.571429%",
      "3/7": "42.857143%",
      "4/7": "57.142857%",
      "5/7": "71.428571%",
      "6/7": "85.714286%",
      "27-screen": "27vh",
      "30-screen": "30vh",
      "35-screen": "35vh",
      "40-screen": "40vh",
      "45-screen": "45vh",
      "50-screen": "50vh",
      "55-screen": "55vh",
      "60-screen": "60vh",
      "65-screen": "65vh",
      "73-screen": "73vh",
      "77-screen": "77vh",
      "80-screen": "80vh",
      "82-screen": "82vh",
      "85-screen": "85vh",
      "90-screen": "90vh",
      "95-screen": "95vh",
    },
    minHeight: {
      "27-screen": "27vh",
      "30-screen": "30vh",
      "35-screen": "35vh",
      "40-screen": "40vh",
      "50-screen": "50vh",
      "55-screen": "55vh",
      "60-screen": "60vh",
      "65-screen": "65vh",
      "73-screen": "73vh",
      "77-screen": "77vh",
      "80-screen": "80vh",
      "82-screen": "82vh",
      "85-screen": "85vh",
      "90-screen": "90vh",
      "95-screen": "95vh",
    },
    maxHeight: {
      "27-screen": "27vh",
      "30-screen": "30vh",
      "35-screen": "35vh",
      "40-screen": "40vh",
      "50-screen": "50vh",
      "55-screen": "55vh",
      "60-screen": "60vh",
      "65-screen": "65vh",
      "73-screen": "73vh",
      "77-screen": "77vh",
      "80-screen": "80vh",
      "82-screen": "82vh",
      "85-screen": "85vh",
      "90-screen": "90vh",
      "95-screen": "95vh",
    },
    width: {
      "40-screen": "40vw",
      "45-screen": "45vw",
      "50-screen": "50vw",
      "60-screen": "60vw",
      "70-screen": "70vw",
      "72-screen": "72vw",
      "80-screen": "80vw",
      "85-screen": "85vw",
      "90-screen": "90vw",
      "95-screen": "95vw",
      "110-screen": "110vw",
      "120-screen": "120vw",
      "140-screen": "140vw",
      "150-screen": "150vw",
      "160-screen": "160vw",
      "170-screen": "170vw",
      "180-screen": "180vw",
      "190-screen": "190vw",
      "200-screen": "200vw",
      "210-screen": "210vw",
      "220-screen": "220vw",
      "230-screen": "230vw",
      "240-screen": "240vw",
      "250-screen": "250vw",
      "260-screen": "260vw",
      "270-screen": "270vw",
      "280-screen": "280vw",
      "290-screen": "290vw",
      "300-screen": "300vw",
      "320-screen": "320vw",
      "340-screen": "340vw",
      "360-screen": "360vw",
      "380-screen": "380vw",
      "400-screen": "400vw",
      "420-screen": "420vw",
      "440-screen": "440vw",
      "460-screen": "460vw",
      "480-screen": "480vw",
      "500-screen": "500vw",
      "540-screen": "540vw",
      "560-screen": "560vw",
    },
    maxWidth: {
      "50-screen": "50vw",
      "60-screen": "60vw",
      "70-screen": "70vw",
      "72-screen": "72vw",
      "80-screen": "80vw",
      "90-screen": "90vw",
      "120-screen": "120vw",
      "140-screen": "140vw",
      "150-screen": "150vw",
      "160-screen": "160vw",
      "170-screen": "170vw",
      "180-screen": "180vw",
      "190-screen": "190vw",
      "200-screen": "200vw",
      "210-screen": "210vw",
      "220-screen": "220vw",
      "230-screen": "230vw",
      "240-screen": "240vw",
      "w-screen-xs": "425px",
    },
  },
},
  plugins: [],
} 
