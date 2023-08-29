import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserContextProvider from './contexts/userContext';
import App from '@/App';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <UserContextProvider>
            <App />
         </UserContextProvider>
      </QueryClientProvider>
   </React.StrictMode>,
);
