import Input from '@/components/UI/Input';
import sendIcon from '@/assets/sendIcon.svg';
import EmojiPicker from 'emoji-picker-react';
import { FormEvent, useState } from 'react';
import emoji from '@/assets/emoji.png';
import { useTogglerStore } from '@/stores/togglerStore';
import { useUserStore } from '@/stores/userStore';
import { getPrivateRoomName } from '@/utils/helpers';
import socket from '@/socket';

const MessageBar = () => {
   const [messageText, setMessageText] = useState('');

   const { setDisplayEmojis, displayEmojis } = useTogglerStore();
   const { user, selectedUser } = useUserStore();

   const addEmoji = ({ emoji }: { emoji: string }) => {
      setMessageText(prevText => prevText + emoji);
   };

   const sendMessage = (event: FormEvent) => {
      event.preventDefault();
      if (messageText) {
         const room = getPrivateRoomName(user._id, selectedUser._id);

         socket.emit('message', {
            room,
            sender: user._id,
            receiver: selectedUser._id,
            content: messageText,
         });
         setMessageText('');
      }
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
