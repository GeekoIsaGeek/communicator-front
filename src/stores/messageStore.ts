import { MessageStore } from '@/types/messageStoreTypes';
import { create } from 'zustand';

const dummyMessages = [
   {
      id: ' 1',
      receiver: '543543jhgjkfdhfds3243223',
      sender: 'gdfjhgjkdfhjk43asdhdsa',
      content:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. , veniam sed, sequi, alias quaerat repellat.',
   },
   {
      id: '2',
      receiver: '64f0dac13957175c5334503d',
      sender: '543jhjhgjhsdad8hgfdasd',
      content:
         'esse nisi minima dolorem. Ullam iste libero fuga autem. Nesciunt?',
   },
];

export const useMessageStore = create<MessageStore>(set => ({
   messages: dummyMessages,
   addMessage: message =>
      set(state => ({
         messages: [...state.messages, message],
      })),
}));
