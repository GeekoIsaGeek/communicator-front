import { useEffect, useRef } from 'react';
import { Message as IMessage } from '@/types/messageStoreTypes';
import Message from '@/components/chat/content/Message';
import { useQuery } from '@tanstack/react-query';
import request from '@/config/axiosInstance';
import { useUserStore } from '@/stores/userStore';
import Loading from '@/components/shared/Loading';

const Messages = () => {
   const chatWrapperRef = useRef<null | HTMLDivElement>(null);
   // const { messages } = useMessageStore();
   const { user, selectedUser } = useUserStore();

   const messageQuery = useQuery({
      queryKey: ['messages'],
      queryFn: async () => {
         const { data } = await request.get('/messages', {
            data: {
               receiver: selectedUser.id,
               sender: user.id,
            },
         });
         return data;
      },
      enabled: false,
   });

   const scrollToBottom = () => {
      if (chatWrapperRef.current) {
         chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
      }
   };

   useEffect(() => {
      scrollToBottom();
      messageQuery.refetch();
      console.log(messageQuery.data);
   }, [messageQuery, selectedUser.id]);

   return (
      <div
         className="h-full w-full py-4 px-4 flex flex-col gap-3 overflow-y-auto self-start"
         ref={chatWrapperRef}
      >
         {messageQuery.isLoading && <Loading renderOnEmptyPage />}
         {messageQuery.data?.map((message: IMessage) => (
            <Message key={message.id} message={message} />
         ))}
      </div>
   );
};

export default Messages;
