import NightIcon from '@/assets/night-icon.png';
import DaytimeIcon from '@/assets/daytime-icon.png';
import { useState } from 'react';

const ThemeToggler = () => {
   const selectedTheme = JSON.parse(localStorage.getItem('theme') as string);

   const [isDayThemeSelected, setIsDayThemeSelected] =
      useState<boolean>(selectedTheme);

   const toggleTheme = (isDayTheme: boolean) => {
      console.log(isDayTheme, isDayThemeSelected, selectedTheme);
      localStorage.setItem('theme', JSON.stringify(isDayTheme));
      setIsDayThemeSelected(prevTheme => !prevTheme);
   };

   return (
      <div
         className={`flex items-center gap-4 px-[6px] py-[2px] bg-extraDarkGray rounded-full overflow-hidden transform transition cursor-pointer w-[60px] border border-gray-300 shadow ${
            isDayThemeSelected ? 'toggler-day-bg ' : 'toggler-night-bg '
         }`}
         onClick={() => toggleTheme(!isDayThemeSelected)}
      >
         <img
            src={isDayThemeSelected ? DaytimeIcon : NightIcon}
            width={20}
            className={`transition-all duration-300 ease-out ${
               isDayThemeSelected ? ' translate-x-0' : ' translate-x-[140%]'
            }`}
            alt="theme icon"
         />
      </div>
   );
};

export default ThemeToggler;
