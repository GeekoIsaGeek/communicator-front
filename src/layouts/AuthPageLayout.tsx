import Logo from '@/components/shared/Logo';
import Copyright from '@/components/shared/Copyright';
import { ReactNode } from 'react';
import PreferencesButton from '@/components/UI/PreferencesButton';
import PreferencesMenu from '@/components/shared/PreferencesMenu';
import { useModalStore } from '@/stores/togglerStore';

const AuthPageLayout = ({ children }: { children: ReactNode }) => {
   const { displayPreferences } = useModalStore();
   return (
      <div className="h-screen w-full flex items-center justify-between flex-col gap-7 bg-purplishWhite dark:bg-[#06060B] overflow-y-auto">
         <div className="absolute right-4 top-4">
            <PreferencesButton />
            {displayPreferences && <PreferencesMenu />}
         </div>
         <div className="h-full w-full flex flex-col justify-center items-center">
            <Logo />
            <div className="min-w-[80%] xs:min-w-[unset] max-w-[80dvw] xs:max-w-[360px]">
               <p className="text-[18px] text-gray-500 font-medium  mb-7 dark:text-textDark">
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
