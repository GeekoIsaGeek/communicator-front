import { ThreeDots } from 'react-loader-spinner';

const Loading = ({ renderOnEmptyPage }: { renderOnEmptyPage: boolean }) => {
   return (
      <div
         className={`flex justify-center items-center ${
            renderOnEmptyPage && 'h-screen'
         }`}
      >
         <ThreeDots width="60" height="60" color="#ff789e" />
      </div>
   );
};

export default Loading;
