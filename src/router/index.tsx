import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '@/pages/Main';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
   },
   {
      path: '*',
      element: <Navigate to="/" />,
   },
]);
