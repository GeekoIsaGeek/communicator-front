import { ReactNode } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface FieldProps<T extends FieldValues> {
   type: string;
   placeholder: string;
   name: keyof T & string;
   register: UseFormRegister<T>;
   rules?: Record<string, unknown>;
   children?: ReactNode;
}

const FormField = <T extends FieldValues>(props: FieldProps<T>) => {
   return (
      <div>
         <input
            type={props.type}
            className="bg-offWhite rounded-md px-2 py-1 shadow-input outline-gray-400 w-full"
            placeholder={props.placeholder}
            {...props.register(props.name as Path<T>, { ...props.rules })}
            required
         />
         {props.children}
      </div>
   );
};

export default FormField;
