import User from '@/components/chat/sidebar/User';
import avatar from '@/assets/avatar.jpg';
import WriteMessage from '@/components/chat/content/WriteMessage';
import Messages from '@/components/chat/content/Messages';

const Main = () => {
   return (
      <main className="w-full flex flex-col max-h-screen justify-between">
         <div className="px-2 shadow">
            <User avatar={avatar} name="John Doe" isChatHeader />
         </div>
         <Messages />
         <WriteMessage />
      </main>
   );
};

export default Main;
