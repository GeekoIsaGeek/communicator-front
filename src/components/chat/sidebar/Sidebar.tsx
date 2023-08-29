import User from '@/components/chat/sidebar/User';
import Search from '@/components/UI/Input';
import avatar from '@/assets/avatar.jpg';
import SearchIcon from '@/components/icons/SearchIcon';

const Sidebar = () => {
   return (
      <aside className="max-h-screen flex flex-col gap-3 md:w-[30%] 2xl:w-1/5 py-3 pl-4 shadow-sidebar ">
         <header className="flex flex-col mr-4 gap-3">
            <h3 className="font-bold text-2xl">Chats</h3>
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
