import useValidateToken from '@/hooks/useValidateToken';
import { Navigate, Outlet } from 'react-router-dom';

const Unauthorized = () => {
   const { isTokenExpired } = useValidateToken();

   if (isTokenExpired()) {
      return <Outlet />;
   }
   return <Navigate to="/chat" />;
};

export default Unauthorized;
