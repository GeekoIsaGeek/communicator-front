import Logo from '@/components/main/Logo';

const Main = () => {
   return (
      <div className="min-h-screen w-screen flex items-center flex-col">
         <Logo />
         <p className="text-xl text-gray-600 font-medium  max-w-[400px] ">
            Communicator helps you to keep in touch with your friends
         </p>
      </div>
   );
};

export default Main;
