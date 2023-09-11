import { useUserStore } from '@/stores/userStore';
import { fetchData } from '@/utils/helpers';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../shared/Loading';
import useValidateToken from '@/hooks/useValidateToken';

const Unauthorized = () => {
   const { user, setUser } = useUserStore();
   const { isTokenExpired } = useValidateToken();

   const fetchUser = async () => {
      const user = await fetchData('/user');
      setUser({ ...user, isAuthenticated: true });
   };

   if (!user.isAuthenticated && isTokenExpired()) {
      return <Outlet />;
   }

   fetchUser();
   if (!user.isAuthenticated) {
      return <Loading renderOnEmptyPage />;
   }
   return <Navigate to="/chat" />;
};

export default Unauthorized;
