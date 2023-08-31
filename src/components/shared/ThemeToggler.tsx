import NightIcon from '@/assets/night-icon.png';
import DaytimeIcon from '@/assets/daytime-icon.png';
import { useThemeStore } from '@/stores/themeStore';

const ThemeToggler = () => {
   const { isNightModeSelected, setIsNightModeSelected } = useThemeStore();

   const toggleTheme = (isNightMode: boolean) => {
      localStorage.setItem('theme', JSON.stringify(isNightMode));
      setIsNightModeSelected(isNightMode);
   };

   return (
      <div
         className={`flex items-center gap-4 px-[6px] py-[2px] bg-extraDarkGray rounded-full overflow-hidden transform transition cursor-pointer w-[60px] border border-gray-300 shadow ${
            isNightModeSelected ? 'toggler-night-bg ' : 'toggler-day-bg '
         }`}
         onClick={() => toggleTheme(!isNightModeSelected)}
      >
         <img
            src={isNightModeSelected ? NightIcon : DaytimeIcon}
            width={20}
            className={`transition-all duration-300 ease-out ${
               isNightModeSelected ? ' translate-x-[140%]' : ' translate-x-0'
            }`}
            alt="theme icon"
         />
      </div>
   );
};

export default ThemeToggler;
