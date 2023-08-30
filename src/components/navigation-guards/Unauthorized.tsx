import { useUserStore } from '@/stores/userStore';
import { Navigate, Outlet } from 'react-router-dom';

const Unauthorized = () => {
   const { user } = useUserStore();

   if (!user.isAuthenticated) {
      return <Outlet />;
   }
   return <Navigate to="/chat" />;
};

export default Unauthorized;
