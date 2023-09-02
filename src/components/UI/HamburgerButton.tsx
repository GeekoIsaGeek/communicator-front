import navIcon from '@/assets/nav.png';
import { useModalStore } from '@/stores/modalStore';

const HamburgerButton = () => {
   const { setDisplaySidebar, displaySidebar } = useModalStore();

   return (
      <img
         src={navIcon}
         alt="navigation icon"
         className="cursor-pointer w-8 md:hidden"
         onClick={() => setDisplaySidebar(!displaySidebar)}
      />
   );
};

export default HamburgerButton;
