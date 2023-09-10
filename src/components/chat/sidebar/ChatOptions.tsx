import { useUserStore } from '@/stores/userStore';
import request from '@/config/axiosInstance';
import { Friend } from '@/types/userStoreTypes';

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
      const { status, data } = await request.post(
         '/connections/remove',
         { connectionId: id },
         {
            headers: {
               Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem('token') as string,
               )}
            `,
            },
         },
      );

      if (status === 200) {
         const connections = user.connections.filter(
            (connection: Friend) => connection._id !== data.removedConnectionId,
         );
         setUser({ ...user, connections });
         filterUsers();
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
