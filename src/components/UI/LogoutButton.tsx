import LogoutIcon from '@/assets/logout.png';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/stores/userStore';

const LogoutButton = () => {
   const { clearUserState } = useUserStore();
   const navigate = useNavigate();

   const logoutUser = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      clearUserState();
      navigate('/login');

      localStorage.removeItem('token');
      localStorage.removeItem('theme');
   };

   return (
      <form onSubmit={logoutUser}>
         <button
            type="submit"
            className="cursor-pointer flex items-center gap-2 text-gray-500 font-bold py-[2px] px-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-out"
         >
            Log out
            <img src={LogoutIcon} alt="logout icon" width={16} />
         </button>
      </form>
   );
};

export default LogoutButton;
