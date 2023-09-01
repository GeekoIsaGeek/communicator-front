import { useUserStore } from '@/stores/userStore';
import { useEffect, useRef } from 'react';
import avatarPlaceholder from '@/assets/avatar.jpg';
import { useMessageStore } from '@/stores/messageStore';

const Messages = () => {
   const { user } = useUserStore();
   const chatWrapperRef = useRef<null | HTMLDivElement>(null);
   const { messages } = useMessageStore();

   const scrollToBottom = () => {
      if (chatWrapperRef.current) {
         chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
      }
   };

   useEffect(() => scrollToBottom(), []);

   return (
      <div
         className="h-full w-full py-4 px-4 flex flex-col gap-3 overflow-y-auto self-start"
         ref={chatWrapperRef}
      >
         {messages.map(message => (
            <div
               key={message.id}
               className={`flex w-[90%] md:max-w-[45%] xl:max-w-[30%] gap-2 ${
                  message.sender === user.id
                     ? 'self-end flex-row-reverse'
                     : 'self-start '
               }`}
            >
               <img
                  src={
                     message.sender === user.id
                        ? `${import.meta.env.VITE_API_URL}${user.avatar}`
                        : avatarPlaceholder
                  }
                  alt="avatar"
                  className="w-8 self-end rounded-full"
               />
               <p
                  className={`px-4 py-2 text-justify text-white dark:text-black rounded-2xl ${
                     message.sender === user.id
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
