import preferencesIcon from '@/assets/preferences.svg';
import { useModalStore } from '@/stores/modalStore';

const PreferencesButton = () => {
   const { displayPreferences, setDisplayPreferences } = useModalStore();

   return (
      <button
         className="px-[5px] py-[5px] rounded-full hover:bg-gray-200  transition-colors duration-300 ease-out "
         onClick={() => setDisplayPreferences(!displayPreferences)}
      >
         <img src={preferencesIcon} width={25} />
      </button>
   );
};

export default PreferencesButton;
