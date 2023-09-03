import navIcon from '@/assets/nav.png';
import { useModalStore } from '@/stores/modalStore';

const HamburgerButton = () => {
   const { setDisplaySidebar, displaySidebar } = useModalStore();

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
