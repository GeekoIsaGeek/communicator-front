import ErrorWarrningIcon from '@/components/icons/ErrorWarrningIcon';

const Error = ({ message }: { message: string | undefined }) => {
   if (message) {
      return (
         <p className="flex gap-2  text-red-400 font-bold break-words relative">
            <ErrorWarrningIcon />
            <span className="ml-6">{message}</span>
         </p>
      );
   }
};

export default Error;
