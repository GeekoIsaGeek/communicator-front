export interface User {
   email: string;
   firstname: string;
   lastname: string;
   token?: string;
   isAuthenticated: boolean;
}

export interface IUserContext {
   user: User;
   setUser: (user: Omit<User, 'isAuthenticated'>) => void;
   clearUserState: () => void;
}
