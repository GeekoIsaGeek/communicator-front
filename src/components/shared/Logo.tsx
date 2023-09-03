const Logo = ({ onChat }: { onChat?: boolean }) => {
   console.log(onChat);
   return (
      <h1
         className={` font-bold logo-gradient font-lobster  ${
            onChat
               ? 'text-[36px] md:text-[48px] xs:mb-2'
               : 'text-[48px] md:text-[58px] xs:mb-7'
         }`}
      >
         Communicator.
      </h1>
   );
};

export default Logo;
