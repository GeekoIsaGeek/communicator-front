import { MessageStore } from '@/types/messageStoreTypes';
import { create } from 'zustand';
import { fetchData } from '@/utils/helpers';

export const useMessageStore = create<MessageStore>(set => ({
   messages: [],
   isLoading: false,
   hasLoaded: false,
   setMessages: messages => set({ messages }),
   addMessage: message =>
      set(state => ({
         messages: [...state.messages, message],
      })),

   fetchMessages: async (receiverId: string, senderId: string) => {
      set({ isLoading: true, hasLoaded: false });
      const url = `/messages?receiver=${receiverId}&sender=${senderId}`;
      const data = await fetchData(url);
      set(() => ({
         messages: data,
         isLoading: false,
         hasLoaded: true,
      }));
   },
}));
