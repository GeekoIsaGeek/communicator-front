import LogoutButton from '@/components/UI/LogoutButton';
import { useUserContext } from '@/contexts/userContext';
import { Navigate } from 'react-router-dom';

const Chat = () => {
   const { user } = useUserContext();

   if (!user.email) {
      return <Navigate to="/login" />;
   }

   return (
      <>
         <h1>chat</h1>
         <LogoutButton />
      </>
   );
};

export default Chat;
