import { create } from 'zustand';
import { UserState } from '@/types/userStoreTypes';
import request from '@/config/axiosInstance';

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
   searchString: '',
   setSearchString: () => {},
   users: [],
   fetchUsers: () => {},
   filteredUsers: [],
   filterUsers: () => {},
   selectedUser: {
      id: '',
      firstname: '',
      lastname: '',
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
      set({ users: users.data, filteredUsers: users.data });
   },

   searchString: initialState.searchString,
   setSearchString: searchString => set({ searchString }),

   filteredUsers: initialState.filteredUsers,
   filterUsers: () => {
      set(state => ({
         filteredUsers: state.users.filter(user =>
            user.firstname
               .toLowerCase()
               .includes(state.searchString.toLowerCase()),
         ),
      }));
   },

   selectedUser: initialState.selectedUser,
   setSelectedUser: selectedUser =>
      set(() => ({
         selectedUser,
      })),
}));
