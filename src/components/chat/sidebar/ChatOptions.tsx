import { useUserStore } from '@/stores/userStore';
import { Friend } from '@/types/userStoreTypes';
import { postData } from '@/utils/helpers';

interface ChatOptionsProps {
   id: string;
   hideMenu: () => void;
}

const ChatOptions = ({ id, hideMenu }: ChatOptionsProps) => {
   const { setUser, filterUsers, user } = useUserStore();

   const clearChat = () => {
      hideMenu();
   };

   const deleteChat = async () => {
      hideMenu();
      try {
         const data = await postData('/connections/remove', {
            connectionId: id,
         });

         const connections = user.connections.filter(
            (connection: Friend) => connection._id !== data.removedConnectionId,
         );
         setUser({ ...user, connections });
         filterUsers();
      } catch (error) {
         console.error((error as Error).message);
      }
   };

   return (
      <ul
         onMouseLeave={() => hideMenu()}
         className="absolute right-2 top-[120%] bg-[#fffffff8] rounded-md shadow-sidebar px-1 py-[10px] w-max text-[15px] font-bolder text-gray-600 z-10"
      >
         <li
            className="border-l-[3px] border-l-transparent hover:border-l-slate-500 px-3 hover:bg-gray-200 transition-border duration-200 ease-out "
            onClick={clearChat}
         >
            Clear chat
         </li>
         <li
            className="border-l-[3px] border-l-transparent hover:border-l-red-500 px-3 hover:bg-gray-200 transition-border duration-200 ease-out"
            onClick={deleteChat}
         >
            Delete
         </li>
      </ul>
   );
};

export default ChatOptions;
