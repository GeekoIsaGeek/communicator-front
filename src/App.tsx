import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Loading from '@/components/shared/Loading';
import useValidateToken from '@/hooks/useValidateToken';
import { useUserStore } from '@/stores/userStore';
import useInitializeTheme from '@/hooks/useInitializeTheme';
import { fetchData } from '@/utils/helpers';

const App = () => {
   const { isTokenExpired } = useValidateToken();
   const { user, setUser } = useUserStore();

   useInitializeTheme();

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['user'],
      queryFn: () => fetchData('/user'),
      enabled: false,
   });

   useEffect(() => {
      if (data) {
         setUser({ ...data, isAuthenticated: true });
      }
   }, [data, setUser]);

   if (!user.isAuthenticated && !isTokenExpired()) {
      refetch();
      if (isLoading) return <Loading renderOnEmptyPage />;
   }

   return <RouterProvider router={router} />;
};

export default App;
