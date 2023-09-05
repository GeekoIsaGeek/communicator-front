import { MessageStore } from '@/types/messageStoreTypes';
import { create } from 'zustand';
import request from '@/config/axiosInstance';

export const useMessageStore = create<MessageStore>(set => ({
   messages: [],
   isLoading: false,
   setMessages: messages => set({ messages }),
   addMessage: message =>
      set(state => ({
         messages: [...state.messages, message],
      })),

   fetchMessages: async (receiverId: string, senderId: string) => {
      set({ isLoading: true });
      const url = `/messages?receiver=${receiverId}&sender=${senderId}`;
      const { data } = await request.get(url);
      set(() => ({
         messages: data,
         isLoading: false,
      }));
   },
}));
