import navIcon from '@/assets/nav.png';
import { useTogglerStore } from '@/stores/togglerStore';

const HamburgerButton = () => {
   const { setDisplaySidebar, displaySidebar } = useTogglerStore();

   return (
      <button className="cursor-pointer md:hidden">
         <img
            src={navIcon}
            alt="navigation icon"
            className="w-8 "
            onClick={() => setDisplaySidebar(!displaySidebar)}
         />
      </button>
   );
};

export default HamburgerButton;
