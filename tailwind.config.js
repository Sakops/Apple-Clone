module.exports = {
  purge: ['./public//*.html', './src//*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
       colors: {
        'headset': 'rgba(0,0,0,0.8)', 
        'headtext': '#f5f5f7', 
        'links': '#06c',
        'headline': '#fec2eb',
        'footertext': '#424245'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}