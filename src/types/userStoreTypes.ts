export interface User {
   id: string;
   email: string;
   firstname: string;
   lastname: string;
   token?: string;
   avatar?: string;
   isAuthenticated: boolean;
}

export interface UserState {
   user: User;
   setUser: (user: Omit<User, 'isAuthenticated'>) => void;
   clearUserState: () => void;
}
