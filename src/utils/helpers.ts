import request from '@/config/axiosInstance';

export const capitalize = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getAvatarLink = (path: string) => {
   if (!path) return null;
   return `${import.meta.env.VITE_API_URL}${path}`;
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

export const postData = async (url: string, body: object) => {
   try {
      const { data } = await request.post(url, body, {
         headers: {
            Authorization: `Bearer ${JSON.parse(
               localStorage.getItem('token') as string,
            )}`,
         },
      });
      return data;
   } catch (error) {
      throw new Error('Something went wrong: ' + (error as Error).message);
   }
};
