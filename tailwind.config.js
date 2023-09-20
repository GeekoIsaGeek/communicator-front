/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            offWhite: 'rgba(0,0,0, 0.03)',
            purplishWhite: '#f6f6fd',
            extraDarkGray: '#000000f5',
            fadedHotPink: '#ff94b3',
            friendsChatColor: '#b0b5ff',
            usersChatColor: '#ff94b3',
            sidebarDark: '#0e0e0e',
            chat: '#0a0a0a',
            textDark: 'white',
         },
         boxShadow: {
            input: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
            form: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
            sidebar:
               'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
            avatar:
               'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
            sidebarDark:
               'rgba(255, 255, 255, 0.05) 0px 2px 5px 0px, rgba(255, 255, 255, 0.08) 0px 0px 0px 1px',
            chatHeaderDark:
               '0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1)',
         },
         screens: {
            xs: '420px',
            xxs: '280px',
         },
         fontFamily: {
            lobster: ['Lobster Two', 'system'],
            lato: ['lato', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
