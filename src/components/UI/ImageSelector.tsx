import avatarPlaceholder from '@/assets/avatar.jpg';
import { ChangeEvent, useState } from 'react';

interface ImageSelectorProps {
   setImageBlob: React.Dispatch<React.SetStateAction<Blob | null>>;
}

const ImageSelector = ({ setImageBlob }: ImageSelectorProps) => {
   const [image, setImage] = useState('');

   const selectImage = (event: ChangeEvent<HTMLInputElement>) => {
      const inputElement = event.currentTarget;

      if (inputElement.files && inputElement.files[0]) {
         const file = inputElement.files[0];
         setImageBlob(file);

         const reader = new FileReader();
         reader.onload = event => {
            setImage(event.target?.result as string);
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <div className="w-full flex justify-center mb-2 mt-3">
         <button className="w-[100px] h-[100px] rounded-full relative overflow-hidden shadow-avatar">
            <img
               src={image || avatarPlaceholder}
               alt="avatar placeholder"
               className="rounded-full w-full h-full object-cover"
            />
            <input
               type="file"
               accept="image/*"
               value=""
               onChange={selectImage}
               className="absolute top-5 left-0 scale-[300%] cursor-pointer opacity-0"
            />
         </button>
      </div>
   );
};

export default ImageSelector;
