import { ReactNode } from 'react';

const SubmitButton = ({ children }: { children: ReactNode }) => {
   return (
      <button
         type="submit"
         className="min-w-max px-[5dvw] sm:px-8 py-1 border border-gray-500 dark:border-textDark dark:text-textDark dark:hover:text-black text-gray-600 hover:bg-fadedHotPink hover:border-transparent hover:text-white dark:hover:border-transparent transition-colors ease-out rounded-[7px]"
      >
         {children}
      </button>
   );
};

export default SubmitButton;
