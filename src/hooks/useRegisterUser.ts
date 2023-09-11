import { useUserStore } from '@/stores/userStore';
import axios from 'axios';
import request from '@/config/axiosInstance';

const useRegisterUser = () => {
   const { setUser } = useUserStore();

   const sendRequest = async (formData: FormData) => {
      let error;

      try {
         const { data } = await request.post('/register', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
               Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem('token') as string,
               )}`,
            },
         });

         localStorage.setItem('token', JSON.stringify(data.token));
         localStorage.setItem('userId', JSON.stringify(data._id));
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

export default useRegisterUser;
