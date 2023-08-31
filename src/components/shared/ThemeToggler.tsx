import NightIcon from '@/assets/night-icon.png';
import DaytimeIcon from '@/assets/daytime-icon.png';
import { useState } from 'react';

const ThemeToggler = () => {
   const isDarkModeSelected =
      JSON.parse(localStorage.getItem('prefersDark') as string) || false;

   const [prefersDark, setPrefersDark] = useState<boolean>(isDarkModeSelected);

   const toggleTheme = (userPrefersDark: boolean) => {
      localStorage.setItem('prefersDark', JSON.stringify(userPrefersDark));
      setPrefersDark(userPrefersDark);
      document.getElementById('root')?.classList.toggle('dark');
   };

   return (
      <div
         className={`flex items-center gap-4 px-[6px] py-[2px] bg-extraDarkGray rounded-full overflow-hidden transform transition cursor-pointer w-[60px] border border-gray-300 shadow ${
            prefersDark ? 'toggler-night-bg ' : 'toggler-day-bg '
         }`}
         onClick={() => toggleTheme(!prefersDark)}
      >
         <img
            src={prefersDark ? NightIcon : DaytimeIcon}
            width={20}
            className={`transition-all duration-300 ease-out ${
               prefersDark ? ' translate-x-[140%]' : ' translate-x-0'
            }`}
            alt="theme icon"
         />
      </div>
   );
};

export default ThemeToggler;
