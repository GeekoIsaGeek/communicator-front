import Sidebar from '@/components/chat/sidebar/Sidebar';
import Main from '@/components/chat/content/Main';
import { useState } from 'react';

const Chat = () => {
   const [showSidebar, setShowSidebar] = useState(false);

   return (
      <div className="w-full min-h-screen flex">
         <Sidebar show={showSidebar} />
         <Main setShowSidebar={setShowSidebar} />
      </div>
   );
};

export default Chat;
