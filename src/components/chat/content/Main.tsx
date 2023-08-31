import User from '@/components/chat/sidebar/User';
import avatar from '@/assets/avatar.jpg';
import WriteMessage from '@/components/chat/content/WriteMessage';
import Messages from '@/components/chat/content/Messages';
import navIcon from '@/assets/nav.png';

interface MainProps {
   setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({ setShowSidebar }: MainProps) => {
   return (
      <main className="w-full flex flex-col max-h-screen justify-between">
         <div className="px-2 shadow flex justify-between items-center">
            <User avatar={avatar} name="John Doe" isChatHeader />
            <img
               src={navIcon}
               alt="navigation icon"
               className="cursor-pointer w-8 md:hidden"
               onClick={() => setShowSidebar(prev => !prev)}
            />
         </div>
         <Messages />
         <WriteMessage />
      </main>
   );
};

export default Main;
