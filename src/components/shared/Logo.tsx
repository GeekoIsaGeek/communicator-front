const Logo = ({ onChat }: { onChat?: boolean }) => {
   return (
      <h1
         className={`text-[48px] md:text-[58px] font-bold logo-gradient font-lobster xs:mb-7 ${
            onChat && 'text-[36px] md:text-[48px] xs:mb-2'
         }`}
      >
         Communicator.
      </h1>
   );
};

export default Logo;
