import Input from '@/components/UI/Input';
import sendIcon from '@/assets/sendIcon.svg';
import EmojiPicker from 'emoji-picker-react';
import { FormEvent, useState } from 'react';
import emoji from '@/assets/emoji.png';
import { useModalStore } from '@/stores/modalStore';
import { useMessageStore } from '@/stores/messageStore';
import { useUserStore } from '@/stores/userStore';

const MessageBar = () => {
   const [messageText, setMessageText] = useState('');

   const { setDisplayEmojis, displayEmojis } = useModalStore();
   const { addMessage } = useMessageStore();
   const { user } = useUserStore();

   const addEmoji = ({ emoji }: { emoji: string }) => {
      setMessageText(prevText => prevText + emoji);
   };

   const sendMessage = (event: FormEvent) => {
      event.preventDefault();
      if (messageText) {
         addMessage({
            id: 'fdsfds',
            sender: user.id,
            receiver: 'sdadsad',
            content: messageText,
         });
         setMessageText('');
      }
      console.log(user);
   };

   return (
      <div className="mb-3 mt-2 px-6 w-full">
         <form
            className="flex items-center gap-4 relative"
            onSubmit={sendMessage}
         >
            {displayEmojis && (
               <div
                  className="absolute bottom-[120%]"
                  onMouseLeave={() => setDisplayEmojis(false)}
               >
                  <EmojiPicker
                     onEmojiClick={emojiObj => addEmoji(emojiObj)}
                     lazyLoadEmojis={true}
                  />
               </div>
            )}
            <Input
               placeholder="Message"
               value={messageText}
               setter={setMessageText}
            >
               <img
                  src={emoji}
                  alt="nerd emoji"
                  className="cursor-pointer w-[30px]"
                  onClick={() => setDisplayEmojis(!displayEmojis)}
               />
            </Input>
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

export default MessageBar;
