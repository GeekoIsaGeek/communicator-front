export interface User {
   email: string;
   firstname: string;
   lastname: string;
   token?: string;
   isAuthenticated: boolean;
}

export interface IUserContext {
   user: User;
   setUser: React.Dispatch<React.SetStateAction<User>>;
   clearUserState: () => void;
}
