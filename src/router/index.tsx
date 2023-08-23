import {
   createBrowserRouter,
   Navigate,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';
import Main from '@/pages/Main';
import { Fragment } from 'react';

export const router = createBrowserRouter(
   createRoutesFromElements(
      <Fragment>
         <Route path="/" element={<Main />} />
         <Route path="*" element={<Navigate to="/" />} />
      </Fragment>,
   ),
);
