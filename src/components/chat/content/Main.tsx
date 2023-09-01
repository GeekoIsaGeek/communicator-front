import User from '@/components/chat/sidebar/User';
import avatar from '@/assets/avatar.jpg';
import Messages from '@/components/chat/content/Messages';
import navIcon from '@/assets/nav.png';
import MessageBar from '@/components/chat/content/MessageBar';

interface MainProps {
   setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({ setShowSidebar }: MainProps) => {
   return (
      <main className="w-full flex flex-col max-h-screen justify-between dark:bg-chat">
         <div className="px-2 shadow dark:shadow-chatHeaderDark flex justify-between items-center dark:bg-sidebarDark">
            <User avatar={avatar} name="John Doe" isChatHeader />
            <img
               src={navIcon}
               alt="navigation icon"
               className="cursor-pointer w-8 md:hidden"
               onClick={() => setShowSidebar(prev => !prev)}
            />
         </div>
         <Messages />
         <MessageBar />
      </main>
   );
};

export default Main;
