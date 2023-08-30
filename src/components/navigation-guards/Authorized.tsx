import { useUserStore } from '@/stores/userStore';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Authorized = () => {
   const { user } = useUserStore();
   const location = useLocation();

   if (!user.isAuthenticated) {
      return <Navigate to="/login" replace />;
   }

   return location.pathname === '/' ? <Navigate to="/chat" /> : <Outlet />;
};

export default Authorized;
