import Logo from '@/components/shared/Logo';
import Copyright from '@/components/shared/Copyright';
import { ReactNode } from 'react';

const AuthPageLayout = ({ children }: { children: ReactNode }) => {
   return (
      <div className="h-screen w-full flex items-center justify-between flex-col gap-7 bg-purplishWhite overflow-y-auto">
         <div className="h-full w-full flex flex-col justify-center items-center">
            <Logo />
            <div className="min-w-[80%] xs:min-w-[unset] max-w-[80dvw] xs:max-w-[360px]">
               <p className="text-[18px] text-gray-500 font-medium  mb-7">
                  Communicator helps you to stay in touch with your friends
               </p>
               {children}
            </div>
         </div>
         <Copyright />
      </div>
   );
};

export default AuthPageLayout;
