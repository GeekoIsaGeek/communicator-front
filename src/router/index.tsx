import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import Registration from '@/pages/Registration';
import Login from '@/pages/Login';
import Chat from '@/pages/Chat';
import Authorized from '@/components/navigation-guards/Authorized';
import NotFound from '@/pages/NotFound';
import Unauthorized from '@/components/navigation-guards/Unauthorized';

export const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path="/" element={<Authorized />}>
            <Route path="/chat" element={<Chat />} />
         </Route>
         <Route element={<Unauthorized />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
         </Route>
         <Route path="*" element={<NotFound />} />,
      </>,
   ),
);
