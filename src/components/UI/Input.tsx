import { ReactNode } from 'react';

interface InputProps {
   children?: ReactNode;
   placeholder: string;
}

const Input = (props: InputProps) => {
   return (
      <div className="w-full flex items-center py-2 px-3 bg-[#f3f3f3] rounded-full">
         {props.children}
         <input
            type="text"
            placeholder={props.placeholder}
            className="w-full px-2 outline-none bg-inherit placeholder-[#6b6b6b]"
         />
      </div>
   );
};

export default Input;
