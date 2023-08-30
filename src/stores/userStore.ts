import { create } from 'zustand';
import { IUserContext } from '@/types/userContextTypes';

const initialState: IUserContext = {
   user: {
      firstname: '',
      lastname: '',
      email: '',
      isAuthenticated: false,
      token: '',
   },
   setUser: () => {},
   clearUserState: () => {},
};

export const useUserStore = create<IUserContext>(set => ({
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
