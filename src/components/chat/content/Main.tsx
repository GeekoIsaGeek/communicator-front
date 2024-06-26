import User from '@/components/chat/sidebar/User';
import Messages from '@/components/chat/content/Messages';
import MessageBar from '@/components/chat/content/MessageBar';
import { useUserStore } from '@/stores/userStore';
import Copyright from '@/components/shared/Copyright';
import Logo from '@/components/shared/Logo';
import HamburgerButton from '@/components/UI/HamburgerButton';
import { fetchData, getAvatarLink } from '@/utils/helpers';
import { useEffect } from 'react';
import { useMessageStore } from '@/stores/messageStore';
import socket from '@/socket';

const Main = () => {
   const { selectedUser, user, setOnlineUsers, setUser, filterUsers } =
      useUserStore();
   const { addMessage } = useMessageStore();

   const avatar = getAvatarLink(selectedUser.avatar as string);

   useEffect(() => {
      socket.io.opts.query = {
         userId: user._id,
         token: JSON.parse(localStorage.getItem('token') as string),
      };
      socket.connect();

      socket.on('onlineUsers', onlineUsers => {
         setOnlineUsers(onlineUsers);
      });

      socket.on('message', async message => {
         addMessage(message);
         const data = await fetchData('/connections');
         setUser({ ...user, connections: data });
         filterUsers();
      });

      return () => {
         socket.disconnect();
         socket.off('message');
      };
   }, [addMessage, setOnlineUsers, setUser, filterUsers, user]);

   return (
      <main className="w-full flex flex-col max-h-screen justify-between dark:bg-chat">
         {!selectedUser._id ? (
            <div className="flex items-center flex-col h-full">
               <h1 className="text-center text-4xl md:text-[52px] md:leading-[60px] logo-gradient py-2 font-bold font-lato max-w-[350px] lg:max-w-[550px] mt-[40dvh]">
                  Select or find a person to start chatting!
               </h1>
               <div className="flex flex-col items-center self-end w-full h-full justify-end">
                  <Logo onChat={true} />
                  <Copyright />
               </div>
               <div className="absolute top-4 right-4">
                  <HamburgerButton />
               </div>
            </div>
         ) : (
            <>
               <div className="px-2 shadow dark:shadow-chatHeaderDark flex justify-between items-center dark:bg-sidebarDark">
                  <User
                     avatar={avatar}
                     name={selectedUser.name}
                     isChatHeader
                     id={user._id}
                  />
                  <HamburgerButton />
               </div>
               <Messages />
               <MessageBar />
            </>
         )}
      </main>
   );
};

export default Main;
