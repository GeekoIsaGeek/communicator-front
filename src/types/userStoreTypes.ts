export interface User {
   id: string;
   email: string;
   firstname: string;
   lastname: string;
   token?: string;
   avatar?: string;
   isAuthenticated: boolean;
}

export interface Friend {
   id: string;
   firstname: string;
   lastname: string;
   avatar?: string;
}

export interface UserState {
   user: User;
   setUser: (user: Omit<User, 'isAuthenticated'>) => void;
   clearUserState: () => void;
   searchString: string;
   setSearchString: (searchString: string) => void;
   users: Friend[];
   fetchUsers: () => void;
   filteredUsers: Friend[];
   filterUsers: () => void;
   selectedUser: Friend;
   setSelectedUser: (user: Friend) => void;
}
