import { create } from 'zustand';

interface TogglerStore {
   displayPreferences: boolean;
   displayEmojis: boolean;
   displaySidebar: boolean;

   setDisplayPreferences: (show: boolean) => void;
   setDisplayEmojis: (show: boolean) => void;
   setDisplaySidebar: (show: boolean) => void;
}

export const useTogglerStore = create<TogglerStore>(set => ({
   displayPreferences: false,
   setDisplayPreferences: (show: boolean) =>
      set(() => ({ displayPreferences: show })),

   displayEmojis: false,
   setDisplayEmojis: (show: boolean) => set(() => ({ displayEmojis: show })),

   displaySidebar: false,
   setDisplaySidebar: (show: boolean) => set(() => ({ displaySidebar: show })),
}));
