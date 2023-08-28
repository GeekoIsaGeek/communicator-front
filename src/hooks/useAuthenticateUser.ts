import request from '@/config/axiosInstance';
import axios from 'axios';
import { LoginFormFields, RegistrationFormFields } from '@/types/FormTypes';
import { useNavigate } from 'react-router-dom';

type Endpoint = '/login' | '/register';
type Credentials = RegistrationFormFields | LoginFormFields;

const useAuthenticateUser = (endpoint: Endpoint) => {
   const navigate = useNavigate();

   const sendRequest = async (credentials: Credentials) => {
      let error, userData;

      try {
         const { data } = await request.post(endpoint, credentials);
         userData = data;
         localStorage.setItem('token', JSON.stringify(data.token));
         navigate('/chat');
      } catch (err) {
         if (axios.isAxiosError(err)) {
            error = err.response ? err.response.data.error : err.message;
         } else {
            error = err;
         }
      }

      return { error, userData };
   };
   return { sendRequest };
};

export default useAuthenticateUser;
