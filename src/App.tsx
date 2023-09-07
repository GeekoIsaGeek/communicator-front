import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Loading from '@/components/shared/Loading';
import useValidateToken from '@/hooks/useValidateToken';
import { useUserStore } from '@/stores/userStore';
import request from '@/config/axiosInstance';
import useInitializeTheme from './hooks/useInitializeTheme';

const App = () => {
   const { isTokenExpired } = useValidateToken();
   const { user, setUser } = useUserStore();

   useInitializeTheme();

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
         const response = await request.get('/user', {
            headers: {
               Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem('token') as string,
               )}`,
            },
         });
         return response.data;
      },
      enabled: false,
   });

   useEffect(() => {
      console.log('yet');
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
