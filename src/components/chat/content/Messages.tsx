import { useUserStore } from '@/stores/userStore';
import { useEffect, useRef } from 'react';
import avatar from '@/assets/avatar.jpg';

const messages = [
   {
      id: 1,
      receiver: '543543jhgjkfdhfds3243223',
      sender: 'gdfjhgjkdfhjk43asdhdsa',
      content:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. , veniam sed, sequi, alias quaerat repellat.',
   },
   {
      id: 2,
      receiver: '64eb5bb7fee0e16ede2e6dc4',
      sender: '543jhjhgjhsdad8hgfdasd',
      content:
         'esse nisi minima dolorem. Ullam iste libero fuga autem. Nesciunt?',
   },
];

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
         className="h-full w-full py-4 px-4 flex flex-col gap-3 overflow-y-auto self-start"
         ref={chatWrapperRef}
      >
         {messages.map(message => (
            <div
               key={message.id}
               className={`flex w-[90%] md:max-w-[45%] xl:max-w-[30%] gap-2 ${
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
