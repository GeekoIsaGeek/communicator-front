import { ColorRing } from 'react-loader-spinner';

const Loading = ({ renderOnEmptyPage }: { renderOnEmptyPage: boolean }) => {
   return (
      <div
         className={`flex justify-center items-center ${
            renderOnEmptyPage && 'h-screen'
         }`}
      >
         <ColorRing
            visible
            height="60"
            width="60"
            colors={[
               'pink',
               '#fcbacb',
               'lightpink',
               '#e39ff6',
               'rgb(231, 183, 255)',
            ]}
         />
      </div>
   );
};

export default Loading;
