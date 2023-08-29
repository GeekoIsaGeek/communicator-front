import { ReactNode, createContext, useContext, useState } from 'react';
import { User, IUserContext } from '@/types/UserContextTypes';

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

const UserContext = createContext<IUserContext>(initialState);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User>(initialState.user);

   const clearUserState = () => {
      setUser(initialState.user);
   };

   return (
      <UserContext.Provider value={{ user, setUser, clearUserState }}>
         {children}
      </UserContext.Provider>
   );
};

/* eslint-disable react-refresh/only-export-components */
export const useUserContext = () => useContext(UserContext);
export default UserContextProvider;
