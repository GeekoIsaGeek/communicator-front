import User from '@/components/chat/sidebar/User';
import Search from '@/components/UI/Input';
import SearchIcon from '@/components/icons/SearchIcon';
import PreferencesMenu from '@/components/shared/PreferencesMenu';
import { useTogglerStore } from '@/stores/togglerStore';
import PreferencesButton from '@/components/UI/PreferencesButton';
import { useUserStore } from '@/stores/userStore';
import { useEffect } from 'react';
import { getAvatarLink } from '@/utils/helpers';

const Sidebar = () => {
   const { displayPreferences } = useTogglerStore();
   const { displaySidebar, setDisplaySidebar } = useTogglerStore();

   const {
      setSearchString,
      searchString,
      fetchUsers,
      filteredUsers,
      setSelectedUser,
      filterUsers,
   } = useUserStore();

   useEffect(() => {
      fetchUsers();
   }, [fetchUsers]);

   useEffect(() => {
      filterUsers();
   }, [searchString, filterUsers]);

   const mobileStyles = `
      flex absolute left-0 top-0 h-full bg-[rgba(255,255,255,0.9)] backdrop-blur-[20px] transition-transform ease-in-out duration-300 dark:bg-[#0c0c0ce0]
      ${displaySidebar ? 'translate-x-[0]' : 'translate-x-[-100%]'}
   `;

   return (
      <aside
         className={`${mobileStyles} dark:sm:bg-sidebarDark md:relative md:translate-x-0 md:flex flex-col h-screen gap-3 md:w-[30%] 2xl:w-1/5 py-3 pl-4 shadow-sidebar dark:shadow-chatHeaderDark z-10`}
      >
         <div className="flex flex-col mr-4 gap-3">
            <div className="flex justify-between items-center relative">
               <h3 className="font-bold text-2xl dark:text-white">Chats</h3>
               <PreferencesButton />
               {displayPreferences && <PreferencesMenu />}
            </div>

            <Search
               placeholder="Find People"
               value={searchString}
               setter={setSearchString}
            >
               <SearchIcon color="#808080" />
            </Search>
         </div>

         <ul className="overflow-y-auto h-full ">
            {filteredUsers.map(user => (
               <User
                  key={user._id}
                  name={user.name}
                  avatar={getAvatarLink(user.avatar as string)}
                  clickHandler={() => {
                     setSelectedUser(user);
                     setDisplaySidebar(false);
                  }}
               />
            ))}
         </ul>
      </aside>
   );
};

export default Sidebar;
