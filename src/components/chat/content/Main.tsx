import User from '@/components/chat/sidebar/User';
import avatar from '@/assets/avatar.jpg';
import WriteMessage from '@/components/chat/content/WriteMessage';

const Main = () => {
   return (
      <main className="w-full flex flex-col justify-between">
         <div className="px-2 shadow">
            <User avatar={avatar} name="John Doe" isChatHeader />
         </div>
         <div className="h-full py-4 px-4">...Messages</div>
         <WriteMessage />
      </main>
   );
};

export default Main;
