import Input from '@/components/UI/Input';
import sendIcon from '@/assets/sendIcon.svg';

const WriteMessage = () => {
   return (
      <div className="mb-3 mt-2 px-6 w-full">
         <form className="flex gap-4">
            <Input placeholder="Message" />
            <button type="submit">
               <img
                  src={sendIcon}
                  alt="send"
                  className="w-8 hover:scale-[120%] transition-transform ease-out"
               />
            </button>
         </form>
      </div>
   );
};

export default WriteMessage;
