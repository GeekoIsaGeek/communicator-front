import User from '@/components/chat/sidebar/User';
import Search from '@/components/UI/Input';
import avatar from '@/assets/avatar.jpg';
import SearchIcon from '@/components/icons/SearchIcon';
import PreferencesMenu from '@/components/UI/PreferencesMenu';
import { useModalStore } from '@/stores/modalStore';
import PreferencesButton from '@/components/UI/PreferencesButton';

const Sidebar = ({ show }: { show: boolean }) => {
   const { displayPreferences } = useModalStore();

   const mobileStyles = `
      flex absolute left-0 top-0 h-full bg-[rgba(255,255,255,0.9)] backdrop-blur-[20px] transition-transform ease-in-out duration-300 dark:bg-[#0c0c0ce0]
      ${show ? 'translate-x-[0]' : 'translate-x-[-100%]'}
   `;

   return (
      <aside
         className={`${mobileStyles} dark:sm:bg-sidebarDark md:relative md:translate-x-0 md:flex flex-col h-screen gap-3 md:w-[30%] 2xl:w-1/5 py-3 pl-4 shadow-sidebar dark:shadow-chatHeaderDark`}
      >
         <div className="flex flex-col mr-4 gap-3">
            <div className="flex justify-between items-center relative">
               <h3 className="font-bold text-2xl dark:text-white">Chats</h3>
               <PreferencesButton />
               {displayPreferences && <PreferencesMenu />}
            </div>

            <Search placeholder="Find People">
               <SearchIcon color="#808080" />
            </Search>
         </div>

         <ul className="overflow-y-auto h-full ">
            <User name="John Doe" avatar={avatar} />
         </ul>
      </aside>
   );
};

export default Sidebar;
