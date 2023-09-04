import { create } from 'zustand';
import { UserState } from '@/types/userStoreTypes';
import request from '@/config/axiosInstance';

const initialState: UserState = {
   user: {
      id: '',
      name: '',
      email: '',
      isAuthenticated: false,
      token: '',
      connections: [],
   },
   setUser: () => {},
   clearUserState: () => {},
   searchString: '',
   setSearchString: () => {},
   users: [],
   fetchUsers: () => {},
   filteredUsers: [],
   filterUsers: () => {},
   selectedUser: {
      id: '',
      name: '',
      avatar: '',
   },
   setSelectedUser: () => {},
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

   users: initialState.users,
   fetchUsers: async () => {
      const users = await request.get('/users', {
         headers: {
            Authorization:
               'Bearer ' + JSON.parse(localStorage.getItem('token') as string),
         },
      });
      set({ users: users.data });
   },

   searchString: initialState.searchString,
   setSearchString: searchString => set({ searchString }),

   filteredUsers: initialState.user.connections,
   filterUsers: () => {
      set(state => {
         if (state.searchString) {
            return {
               filteredUsers: state.users.filter(user =>
                  user.name
                     .toLowerCase()
                     .includes(state.searchString.toLowerCase()),
               ),
            };
         }
         return { filteredUsers: state.user.connections };
      });
   },

   selectedUser: initialState.selectedUser,
   setSelectedUser: selectedUser =>
      set(() => ({
         selectedUser,
      })),
}));
