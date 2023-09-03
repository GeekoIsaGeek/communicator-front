export interface User {
   id: string;
   email: string;
   name: string;
   token?: string;
   avatar?: string;
   isAuthenticated: boolean;
   connections: [];
}

export interface Friend {
   id: string;
   name: string;
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
