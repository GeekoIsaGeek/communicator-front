import {
   createBrowserRouter,
   Navigate,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import Registration from '@/pages/Registration';
import Login from '@/pages/Login';
import Chat from '@/pages/Chat';
import Root from '@/pages/Root';

export const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path="/" element={<Root />} />
         <Route path="/login" element={<Login />} />
         <Route path="/registration" element={<Registration />} />
         <Route path="/chat" element={<Chat />} />
         <Route path="*" element={<Navigate to="/" />} />
      </>,
   ),
);
