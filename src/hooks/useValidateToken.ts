import jwtDecode from 'jwt-decode';

interface JwtToken {
   id: string;
   exp: number;
}

const useValidateToken = () => {
   const isTokenExpired = () => {
      if (!localStorage.getItem('token')) {
         return true;
      }
      const token = localStorage.getItem('token') as string;

      const currentTime = Date.now() / 1000;
      const decodedToken = jwtDecode<JwtToken>(token);
      return decodedToken.exp < currentTime;
   };

   return { isTokenExpired };
};

export default useValidateToken;
