import Sidebar from '@/components/chat/sidebar/Sidebar';
import Main from '@/components/chat/content/Main';

const Chat = () => {
   return (
      <div className="w-full min-h-screen flex">
         <Sidebar />
         <Main />
      </div>
   );
};

export default Chat;
