import avatarPlaceholder from '@/assets/avatar.jpg';
import { useUserStore } from '@/stores/userStore';
import { Message as IMessage } from '@/types/messageStoreTypes';
import { getAvatarLink } from '@/utils/helpers';

const Message = ({ message }: { message: IMessage }) => {
   const { user, selectedUser } = useUserStore();

   return (
      <div
         className={`flex w-[90%] md:max-w-[45%] xl:max-w-[30%] gap-2 ${
            message.sender === user.id
               ? 'self-end flex-row-reverse'
               : 'self-start '
         }`}
      >
         <img
            src={
               message.sender === user.id
                  ? getAvatarLink(user.avatar as string) || avatarPlaceholder
                  : getAvatarLink(selectedUser.avatar as string) ||
                    avatarPlaceholder
            }
            alt="avatar"
            className="w-8 self-end rounded-full"
         />
         <p
            className={`px-4 py-2 text-justify text-white dark:text-black rounded-2xl flex flex-col ${
               message.sender === user.id
                  ? ' bg-usersChatColor'
                  : 'bg-[#8b9dee]'
            }`}
         >
            {message.content}
         </p>
      </div>
   );
};

export default Message;
