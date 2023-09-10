import { ChatOptionsProps } from '@/types/sharedPropTypes';
import Clear from '@/components/chat/sidebar/chat-options/Clear';
import Delete from '@/components/chat/sidebar/chat-options/Delete';

const ChatOptions = ({ id, hideMenu }: ChatOptionsProps) => {
   return (
      <ul
         onMouseLeave={() => hideMenu()}
         className="absolute right-2 top-[120%] bg-[#fffffff8] rounded-md shadow-sidebar px-1 py-[10px] w-max text-[15px] font-bolder text-gray-600 z-10"
      >
         <Clear id={id} hideMenu={hideMenu} />
         <Delete id={id} hideMenu={hideMenu} />
      </ul>
   );
};

export default ChatOptions;
