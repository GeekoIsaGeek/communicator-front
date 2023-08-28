import { useUserContext } from '@/contexts/userContext';
import SubmitButton from './SubmitButton';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
   const { clearUserState } = useUserContext();
   const navigate = useNavigate();

   const logoutUser = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      clearUserState();
      navigate('/login');
      localStorage.removeItem('token');
   };

   return (
      <form onSubmit={logoutUser}>
         <SubmitButton>Log out</SubmitButton>
      </form>
   );
};

export default LogoutButton;
