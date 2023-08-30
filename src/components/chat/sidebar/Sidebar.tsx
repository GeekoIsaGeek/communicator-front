import User from '@/components/chat/sidebar/User';
import Search from '@/components/UI/Input';
import avatar from '@/assets/avatar.jpg';
import SearchIcon from '@/components/icons/SearchIcon';
import preferencesIcon from '@/assets/preferences.svg';
import Preferences from '@/components/chat/sidebar/Preferences';
import { useState } from 'react';

const Sidebar = () => {
   const [displayPreferences, setDisplayPreferences] = useState(false);

   return (
      <aside className="max-h-screen flex flex-col gap-3 md:w-[30%] 2xl:w-1/5 py-3 pl-4 shadow-sidebar">
         <header className="flex flex-col mr-4 gap-3">
            <div className="flex justify-between items-center relative">
               <h3 className="font-bold text-2xl">Chats</h3>
               <button className="px-[5px] py-[5px] rounded-full hover:bg-gray-200  transition-colors duration-300 ease-out ">
                  <img
                     src={preferencesIcon}
                     width={25}
                     onClick={() => setDisplayPreferences(prev => !prev)}
                  />
               </button>
               {displayPreferences && <Preferences />}
            </div>
            <Search placeholder="Find People">
               <SearchIcon color="#808080" />
            </Search>
         </header>

         <ul className="overflow-y-auto h-full ">
            <User name="John Doe" avatar={avatar} />
         </ul>
      </aside>
   );
};

export default Sidebar;