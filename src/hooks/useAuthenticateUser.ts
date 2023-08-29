import request from '@/config/axiosInstance';
import axios from 'axios';
import { LoginFormFields, RegistrationFormFields } from '@/types/formTypes';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/contexts/userContext';

type Endpoint = '/login' | '/register';
type Credentials = RegistrationFormFields | LoginFormFields;

const useAuthenticateUser = (endpoint: Endpoint) => {
   const navigate = useNavigate();
   const { setUser } = useUserContext();

   const sendRequest = async (credentials: Credentials) => {
      let error;

      try {
         const { data } = await request.post(endpoint, credentials);

         localStorage.setItem('token', JSON.stringify(data.token));
         setUser(prev => ({ ...prev, ...data, isAuthenticated: true }));
         navigate('/chat');
      } catch (err) {
         if (axios.isAxiosError(err)) {
            error = err.response ? err.response.data.error : err.message;
         } else {
            error = err;
         }
      }

      return { error };
   };
   return { sendRequest };
};

export default useAuthenticateUser;
