import request from '@/config/axiosInstance';
import axios from 'axios';
import { LoginFormFields } from '@/types/formTypes';
import { useUserStore } from '@/stores/userStore';

const useAuthenticateUser = () => {
   const { setUser } = useUserStore();
   const sendRequest = async (credentials: LoginFormFields) => {
      let error;

      try {
         const { data } = await request.post('/login', credentials);
         localStorage.setItem('token', JSON.stringify(data.token));
         setUser(data);
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
