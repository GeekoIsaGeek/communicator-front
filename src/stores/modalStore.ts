import { create } from 'zustand';

interface ModalStore {
   displayPreferences: boolean;
   displayEmojis: boolean;
   setDisplayEmojis: (show: boolean) => void;
   setDisplayPreferences: (show: boolean) => void;
}

export const useModalStore = create<ModalStore>(set => ({
   displayPreferences: false,
   setDisplayPreferences: (show: boolean) =>
      set(() => ({ displayPreferences: show })),

   displayEmojis: false,
   setDisplayEmojis: (show: boolean) => set(() => ({ displayEmojis: show })),
}));
