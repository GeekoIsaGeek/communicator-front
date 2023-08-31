import { create } from 'zustand';
import { UserState } from '@/types/userStoreTypes';

const initialState: UserState = {
   user: {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      isAuthenticated: false,
      token: '',
   },
   setUser: () => {},
   clearUserState: () => {},
};

export const useUserStore = create<UserState>(set => ({
   user: initialState.user,
   setUser: userData =>
      set(state => ({
         user: { ...state.user, ...userData },
      })),
   clearUserState: () =>
      set(() => ({
         user: initialState.user,
      })),
}));
