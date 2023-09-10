import { useUserStore } from '@/stores/userStore';
import request from '@/config/axiosInstance';
import { ChatOptionsProps } from '@/types/sharedPropTypes';
import { useMessageStore } from '@/stores/messageStore';

const Clear = ({ hideMenu, id }: ChatOptionsProps) => {
   const { user } = useUserStore();
   const { setMessages } = useMessageStore();

   const clearChat = async () => {
      hideMenu();
      try {
         const url = `/messages/remove?sender=${user._id}&receiver=${id}`;
         await request.delete(url, {
            headers: {
               Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem('token') as string,
               )}`,
            },
         });
         setMessages([]);
      } catch (error) {
         console.error((error as Error).message);
      }
   };

   return (
      <li
         className="border-l-[3px] border-l-transparent hover:border-l-slate-500 px-3 hover:bg-gray-200 transition-border duration-200 ease-out "
         onClick={clearChat}
      >
         Clear chat
      </li>
   );
};

export default Clear;
