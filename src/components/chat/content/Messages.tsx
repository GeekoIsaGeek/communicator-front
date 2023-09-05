import { useEffect, useRef } from 'react';
import { Message as IMessage } from '@/types/messageStoreTypes';
import Message from '@/components/chat/content/Message';
import { useUserStore } from '@/stores/userStore';
import Loading from '@/components/shared/Loading';
import { useMessageStore } from '@/stores/messageStore';

const Messages = () => {
   const chatWrapperRef = useRef<null | HTMLDivElement>(null);
   const { user, selectedUser } = useUserStore();
   const { messages, isLoading, fetchMessages, setMessages } =
      useMessageStore();

   const scrollToBottom = () => {
      if (chatWrapperRef.current) {
         chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
      }
   };

   useEffect(() => {
      scrollToBottom();
      fetchMessages(selectedUser._id, user._id);

      return () => {
         setMessages([]);
      };
   }, [fetchMessages, selectedUser._id, user._id, setMessages]);

   return (
      <div
         className="h-full w-full py-4 px-4 flex flex-col gap-3 overflow-y-auto self-start"
         ref={chatWrapperRef}
      >
         {isLoading && <Loading renderOnEmptyPage />}
         {messages?.map((message: IMessage) => (
            <Message key={message._id} message={message} />
         ))}
      </div>
   );
};

export default Messages;
