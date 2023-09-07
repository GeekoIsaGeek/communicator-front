import request from '@/config/axiosInstance';

export const capitalize = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getAvatarLink = (path: string) => {
   return `${import.meta.env.VITE_API_URL}${path}`;
};

export const getPrivateRoomName = (senderId: string, receiverId: string) => {
   return [senderId, receiverId].sort().join('_');
};

export const fetchData = async (url: string) => {
   try {
      const { data } = await request.get(url, {
         headers: {
            Authorization: `Bearer ${JSON.parse(
               localStorage.getItem('token') as string,
            )}`,
         },
      });
      return data;
   } catch (error) {
      throw new Error('Fetching failed: ' + (error as Error).message);
   }
};
