import { useUserStore } from '@/stores/userStore';
import messages from '@/dummyMessages';
import { useEffect, useRef } from 'react';
import avatar from '@/assets/avatar.jpg';

const Messages = () => {
   const { user } = useUserStore();
   const chatWrapperRef = useRef<null | HTMLDivElement>(null);

   const scrollToBottom = () => {
      if (chatWrapperRef.current) {
         chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
      }
   };

   useEffect(() => scrollToBottom(), []);

   return (
      <div
         className="h-full py-2 px-2 flex flex-col gap-3 overflow-y-auto self-start"
         ref={chatWrapperRef}
      >
         {messages.map((message, i) => (
            <div
               className={`flex w-[90%] md:max-w-[40%] xl:max-w-[30%] gap-2 ${
                  message.receiver === user.id
                     ? 'self-end flex-row-reverse'
                     : 'self-start '
               }`}
            >
               <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 self-end rounded-full"
               />
               <p
                  key={i}
                  className={`px-4 py-2 text-justify text-white rounded-2xl ${
                     message.receiver === user.id
                        ? ' bg-usersChatColor'
                        : 'bg-[#8ba2ee]'
                  }`}
               >
                  {message.content}
               </p>
            </div>
         ))}
      </div>
   );
};

export default Messages;
