import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token') as string);

export default axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
   },
});
