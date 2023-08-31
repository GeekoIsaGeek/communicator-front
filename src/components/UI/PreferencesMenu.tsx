import LogoutButton from '@/components/UI/LogoutButton';
import ThemeToggler from '@/components/shared/ThemeToggler';
import { useLocation } from 'react-router-dom';

const PreferencesMenu = () => {
   const { pathname } = useLocation();

   return (
      <div className="flex flex-col gap-4 absolute right-0 top-10 bg-[#ffffffde] backdrop-blur-[30px] shadow-sidebar px-6 py-3 rounded-md w-max select-none">
         <div className="flex items-center gap-2">
            <p className="font-lobster text-lg text-gray-600">Mode</p>
            <ThemeToggler />
         </div>
         {pathname === '/chat' && <LogoutButton />}
      </div>
   );
};

export default PreferencesMenu;
