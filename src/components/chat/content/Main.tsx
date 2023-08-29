import User from '@/components/chat/sidebar/User';
import avatar from '@/assets/avatar.jpg';
import WriteMessage from '@/components/chat/content/WriteMessage';

const Messages = () => {
   return (
      <div className="w-full flex flex-col justify-between">
         <header className="px-2 shadow">
            <User avatar={avatar} name="John Doe" isChatHeader />
         </header>
         <div className="h-full py-4 px-4">...Messages</div>
         <WriteMessage />
      </div>
   );
};

export default Messages;
