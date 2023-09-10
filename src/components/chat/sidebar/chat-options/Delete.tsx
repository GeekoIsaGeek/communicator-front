import { useUserStore } from '@/stores/userStore';
import { postData } from '@/utils/helpers';
import { Friend } from '@/types/userStoreTypes';
import { ChatOptionsProps } from '@/types/sharedPropTypes';

const Delete = ({ hideMenu, id }: ChatOptionsProps) => {
   const { setUser, filterUsers, user } = useUserStore();

   const deleteChat = async () => {
      hideMenu();
      try {
         const data = await postData('/connections/remove?', {
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
      <li
         className="border-l-[3px] border-l-transparent hover:border-l-red-500 px-3 hover:bg-gray-200 transition-border duration-200 ease-out"
         onClick={deleteChat}
      >
         Delete
      </li>
   );
};

export default Delete;
