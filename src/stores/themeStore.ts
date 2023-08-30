import { create } from 'zustand';

interface ThemeStore {
   isNightModeSelected: boolean;
   setIsNightModeSelected: (setIsNightModeSelected: boolean) => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
   isNightModeSelected: JSON.parse(localStorage.getItem('theme') as string),
   setIsNightModeSelected: isNightModeSelected => set({ isNightModeSelected }),
}));
