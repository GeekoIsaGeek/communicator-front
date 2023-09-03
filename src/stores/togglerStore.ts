import { create } from 'zustand';

interface ModalStore {
   displayPreferences: boolean;
   displayEmojis: boolean;
   displaySidebar: boolean;

   setDisplayPreferences: (show: boolean) => void;
   setDisplayEmojis: (show: boolean) => void;
   setDisplaySidebar: (show: boolean) => void;
}

export const useModalStore = create<ModalStore>(set => ({
   displayPreferences: false,
   setDisplayPreferences: (show: boolean) =>
      set(() => ({ displayPreferences: show })),

   displayEmojis: false,
   setDisplayEmojis: (show: boolean) => set(() => ({ displayEmojis: show })),

   displaySidebar: false,
   setDisplaySidebar: (show: boolean) => set(() => ({ displaySidebar: show })),
}));
