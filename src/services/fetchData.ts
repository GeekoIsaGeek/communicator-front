import request from '@/config/axiosInstance';

const fetchUser = async () => {
   const token = JSON.parse(localStorage.getItem('token') as string);
   const response = await request.get('/user', {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return response.data;
};

export { fetchUser };
