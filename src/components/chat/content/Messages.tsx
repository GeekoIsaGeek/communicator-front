import { useEffect, useRef } from 'react';
import { useMessageStore } from '@/stores/messageStore';
import Message from '@/components/chat/content/Message';

const Messages = () => {
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
            <Message key={message.id} message={message} />
         ))}
      </div>
   );
};

export default Messages;
