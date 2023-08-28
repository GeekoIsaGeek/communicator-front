import { useUserContext } from '@/contexts/userContext';
import useValidateToken from '@/hooks/useValidateToken';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/components/shared/Loading';
import { fetchUser } from '@/services/fetchData';
import { useEffect } from 'react';

const Root = () => {
   const { user, setUser } = useUserContext();
   const { isTokenExpired } = useValidateToken();

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['user'],
      queryFn: fetchUser,
      enabled: false,
   });

   useEffect(() => setUser(prev => ({ ...prev, ...data })), [data]);

   if (isTokenExpired()) {
      return <Navigate to="/login" />;
   }

   if (!isTokenExpired() && !user.email) {
      refetch();
      return isLoading && <Loading renderOnEmptyPage />;
   }

   return <Navigate to="/chat" />;
};

export default Root;
