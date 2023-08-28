import Logo from '@/components/shared/Logo';
import Copyright from '@/components/shared/Copyright';
import { ReactNode } from 'react';

const AuthPageLayout = ({ children }: { children: ReactNode }) => {
   return (
      <div className="min-h-screen w-full flex items-center justify-between flex-col gap-7 bg-purplishWhite">
         <div className="pt-[16vh] xs:pt-[20dvh]">
            <Logo />
            <div className="max-w-[80dvw] xs:max-w-[360px]">
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