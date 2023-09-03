import { MessageStore } from '@/types/messageStoreTypes';
import { create } from 'zustand';

export const useMessageStore = create<MessageStore>(set => ({
   messages: [],
   addMessage: message =>
      set(state => ({
         messages: [...state.messages, message],
      })),
}));
