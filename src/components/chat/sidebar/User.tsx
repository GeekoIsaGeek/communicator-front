import avatarPlaceholder from '@/assets/avatar.jpg';
import ListIcon from '@/components/icons/ListIcon';
import ChatOptions from '@/components/chat/sidebar/chat-options/Options';
import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';

interface UserProps {
   id: string;
   avatar: string | null;
   name: string;
   isChatHeader?: boolean;
   clickHandler?: () => void;
}

const User = ({ avatar, name, isChatHeader, clickHandler, id }: UserProps) => {
   const [displayChatOptions, setDisplayChatOptions] = useState(false);
   const { user, onlineUsers } = useUserStore();

   const showChatOptions = (event: React.MouseEvent) => {
      event.stopPropagation();
      setDisplayChatOptions(!displayChatOptions);
   };

   const isConnection =
      user.connections.findIndex(connection => connection._id === id) !== -1;

   return (
      <div
         className={`py-2 px-2 flex items-center justify-between gap-4 ${
            !isChatHeader &&
            'hover:bg-[#f3f3f388] cursor-pointer rounded-lg transition-colors duration-200 ease-in-out dark:hover:bg-gray-700'
         }`}
         onClick={clickHandler}
      >
         <div className="flex items-center gap-5">
            <img
               src={avatar || avatarPlaceholder}
               alt="avatar"
               className={`${
                  isChatHeader ? 'h-[40px] w-[40px]' : 'h-[50px] w-[50px] '
               } rounded-full object-cover shadow-avatar"`}
            />
            <p className="text-md font-bolder text-gray-600 dark:text-white">
               {name}
            </p>
            {onlineUsers[id] && (
               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            )}
         </div>

         {!isChatHeader && isConnection && (
            <div
               className="p-1 hover:bg-slate-200 dark:hover:bg-slate-300 transition-colors ease-out duration-200 rounded-full cursor-pointer relative "
               onClick={event => showChatOptions(event)}
            >
               <ListIcon />
               {displayChatOptions && (
                  <ChatOptions
                     id={id}
                     hideMenu={() => setDisplayChatOptions(false)}
                  />
               )}
            </div>
         )}
      </div>
   );
};

export default User;
