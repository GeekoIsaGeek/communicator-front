interface UserProps {
   avatar: string;
   name: string;
   isChatHeader?: boolean;
}

const User = ({ avatar, name, isChatHeader }: UserProps) => {
   return (
      <div
         className={`py-2 px-2 gap-5 flex items-center ${
            !isChatHeader && 'hover:bg-[#f3f3f3] cursor-pointer rounded-md'
         }`}
      >
         <img
            src={avatar}
            alt="avatar"
            className={`${
               isChatHeader ? 'h-[40px] w-[40px]' : 'h-[50px] w-[50px] '
            } rounded-full object-cover"`}
         />
         <p className="text-md font-bolder">{name}</p>
      </div>
   );
};

export default User;
