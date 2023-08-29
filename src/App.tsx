import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '@/services/fetchData';
import { useEffect } from 'react';
import { useUserContext } from '@/contexts/userContext';
import Loading from '@/components/shared/Loading';
import useValidateToken from '@/hooks/useValidateToken';

const App = () => {
   const { user, setUser } = useUserContext();
   const { isTokenExpired } = useValidateToken();

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['user'],
      queryFn: fetchUser,
      enabled: false,
   });

   useEffect(() => {
      if (data) {
         setUser(prev => ({ ...prev, ...data, isAuthenticated: true }));
      }
   }, [data, setUser]);

   if (!user.isAuthenticated && !isTokenExpired()) {
      refetch();
      if (isLoading) return <Loading renderOnEmptyPage />;
   }
   return <RouterProvider router={router} />;
};

export default App;
