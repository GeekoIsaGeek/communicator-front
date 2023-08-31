import avatarPlaceholder from '@/assets/avatar.jpg';

interface UserProps {
   avatar: string;
   name: string;
   isChatHeader?: boolean;
}

const User = ({ avatar, name, isChatHeader }: UserProps) => {
   return (
      <div
         className={`py-2 px-2 gap-5 flex items-center ${
            !isChatHeader &&
            'hover:bg-[#f3f3f388] cursor-pointer rounded-lg transition-colors duration-200 ease-in-out dark:hover:bg-gray-700'
         }`}
      >
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
      </div>
   );
};

export default User;
