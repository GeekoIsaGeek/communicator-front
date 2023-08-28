import { useUserContext } from '@/contexts/userContext';
import useValidateToken from '@/hooks/useValidateToken';
import { Navigate, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/components/shared/Loading';
import { fetchUser } from '@/services/fetchData';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Authorized = () => {
   const { user, setUser } = useUserContext();
   const { isTokenExpired } = useValidateToken();
   const location = useLocation();

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['user'],
      queryFn: fetchUser,
      enabled: false,
   });

   useEffect(() => setUser(prev => ({ ...prev, ...data })), [data]);

   if (isTokenExpired()) {
      return <Navigate to="/login" replace />;
   }

   if (!isTokenExpired() && !user.email) {
      refetch();
      return isLoading && <Loading renderOnEmptyPage />;
   }

   return location.pathname === '/' ? <Navigate to="/chat" /> : <Outlet />;
};

export default Authorized;
