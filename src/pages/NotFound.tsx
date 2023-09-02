import sadFace from '@/assets/sad-face.svg';

const NotFound = () => {
   return (
      <div className="flex justify-center items-center flex-col gap-5 w-full h-screen text-[#414141] dark:bg-[#060606]">
         <img
            src={sadFace}
            alt="sad face"
            className="mb-5 md:mb-10 w-[100px] md:w-[200px]"
         />
         <h1 className="text-5xl md:text-[90px]">404</h1>
         <p className="text-sm md:text-lg font-bolder">
            The page you are looking for could not be found
         </p>
      </div>
   );
};

export default NotFound;
