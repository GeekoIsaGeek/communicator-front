/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            offWhite: 'rgba(0,0,0, 0.03)',
            purplishWhite: '#f6f6fd',
            extraDarkGray: '#000000f5',
            fadedHotPink: '#ff94b3',
            friendsChatColor: '#b0b5ff',
            usersChatColor: '#ff94b3',
         },
         boxShadow: {
            input: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
            form: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
            sidebar:
               'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
         },
         screens: {
            xs: '420px',
         },
         fontFamily: {
            lobster: ['Lobster Two', 'cursive'],
         },
      },
   },
   plugins: [],
};
