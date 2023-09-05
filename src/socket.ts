import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_SOCKET_URL, {
   auth: {
      token: JSON.parse(localStorage.getItem('token')!),
   },
});

export default socket;
