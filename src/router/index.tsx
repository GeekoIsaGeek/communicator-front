import {
   createBrowserRouter,
   Navigate,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import Login from '@/pages/Login';
import Registration from '@/pages/Registration';

export const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path="/" element={<Login />} />
         <Route path="/registration" element={<Registration />} />
         <Route path="*" element={<Navigate to="/" />} />
      </>,
   ),
);
