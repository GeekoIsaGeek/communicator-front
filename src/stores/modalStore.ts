import { create } from 'zustand';

interface ModalStore {
   displayPreferences: boolean;
   setDisplayPreferences: (show: boolean) => void;
}

export const useModalStore = create<ModalStore>(set => ({
   displayPreferences: false,
   setDisplayPreferences: (show: boolean) =>
      set(() => ({ displayPreferences: show })),
}));
