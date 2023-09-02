import { ReactNode } from 'react';
import { UserState } from '@/types/userStoreTypes';

interface InputProps {
   children?: ReactNode;
   placeholder: string;
   value: string;
   setter:
      | React.Dispatch<React.SetStateAction<string>>
      | UserState['setSearchString'];
}

const Input = (props: InputProps) => {
   return (
      <div className="w-full flex items-center py-1 sm:py-2 px-3 bg-[#f5f5f5] dark:sm:bg-[#161616] rounded-full shadow-input">
         {props.children}
         <input
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={e => props.setter(e.target.value)}
            className="w-full px-2 outline-none bg-inherit placeholder-[#6b6b6b] text-gray-700 dark:text-black dark:sm:text-white"
         />
      </div>
   );
};

export default Input;
