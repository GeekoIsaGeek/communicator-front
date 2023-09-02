import User from '@/components/chat/sidebar/User';
import Messages from '@/components/chat/content/Messages';
import MessageBar from '@/components/chat/content/MessageBar';
import { useUserStore } from '@/stores/userStore';
import Copyright from '@/components/shared/Copyright';
import Logo from '@/components/shared/Logo';
import HamburgerButton from '@/components/UI/HamburgerButton';

const Main = () => {
   const { selectedUser } = useUserStore();

   const name = `${selectedUser.firstname} ${selectedUser.lastname}`;
   const avatar = `${import.meta.env.VITE_API_URL}${selectedUser.avatar}`;

   return (
      <main className="w-full flex flex-col max-h-screen justify-between dark:bg-chat">
         {!selectedUser.id ? (
            <div className="flex items-center flex-col h-full">
               <h1 className="text-center text-4xl md:text-5xl dark:text-white text-gray-600 max-w-[400px] lg:max-w-none mt-[400px] ">
                  Select or find a person to start chatting
               </h1>
               <div className="flex flex-col items-center self-end w-full h-full justify-end">
                  <Logo />
                  <Copyright />
               </div>
               <div className="absolute top-4 right-4">
                  <HamburgerButton />
               </div>
            </div>
         ) : (
            <>
               <div className="px-2 shadow dark:shadow-chatHeaderDark flex justify-between items-center dark:bg-sidebarDark">
                  <User avatar={avatar} name={name} isChatHeader />
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
