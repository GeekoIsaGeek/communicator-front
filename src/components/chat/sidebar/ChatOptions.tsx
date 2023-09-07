import { useTogglerStore } from '@/stores/togglerStore';

const ChatOptions = () => {
   const { setDisplayChatOptions } = useTogglerStore();

   return (
      <ul
         className="absolute right-2 top-[120%] bg-[#fffffff8] rounded-md shadow-sidebar z-2 pl-1 pr-4 py-[10px] w-max text-[15px] font-bolder text-gray-600"
         onMouseLeave={() => setDisplayChatOptions(false)}
      >
         <li className="border-l-[3px] border-l-transparent hover:border-l-fadedHotPink pl-3 transition-border duration-200 ease-out ">
            Clear chat
         </li>
         <li className="border-l-[3px] border-l-transparent hover:border-l-red-500 pl-3 transition-border duration-200 ease-out">
            Delete
         </li>
      </ul>
   );
};

export default ChatOptions;
