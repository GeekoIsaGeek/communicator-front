import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/stores/userStore';
import request from '@/config/axiosInstance';
import axios from 'axios';

const useRegisterUser = () => {
   const navigate = useNavigate();
   const { setUser } = useUserStore();

   const sendRequest = async (formData: FormData) => {
      let error;

      try {
         const { data } = await request.post('/register', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });

         localStorage.setItem('token', JSON.stringify(data.token));
         setUser({ ...data, isAuthenticated: true });
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

export default useRegisterUser;
