import { create } from 'zustand';
import { UserState } from '@/types/userStoreTypes';
import { fetchData } from '@/utils/helpers';

const initialState: UserState = {
   user: {
      _id: '',
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
      _id: '',
      name: '',
      avatar: '',
   },
   setSelectedUser: () => {},
   clearSelectedUser: () => {},
   onlineUsers: {},
   setOnlineUsers: () => {},
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
      const users = await fetchData('/users');
      set({ users });
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
   clearSelectedUser: () => {
      set(() => ({ selectedUser: initialState.selectedUser }));
   },

   onlineUsers: initialState.onlineUsers,
   setOnlineUsers: onlineUsers => {
      set({ onlineUsers });
   },
}));
