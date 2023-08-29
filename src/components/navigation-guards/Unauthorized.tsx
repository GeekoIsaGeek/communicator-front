import { useUserContext } from '@/contexts/userContext';
import { Navigate, Outlet } from 'react-router-dom';

const Unauthorized = () => {
   const { user } = useUserContext();

   if (!user.isAuthenticated) {
      return <Outlet />;
   }
   return <Navigate to="/chat" />;
};

export default Unauthorized;
