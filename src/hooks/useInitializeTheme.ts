import { useEffect } from 'react';

const useInitializeTheme = () => {
   useEffect(() => {
      const prefersDark: boolean = JSON.parse(
         localStorage.getItem('prefersDark') as string,
      );

      if (prefersDark) {
         document.querySelector('#root')?.classList.add('dark');
      }
   }, []);
};

export default useInitializeTheme;
