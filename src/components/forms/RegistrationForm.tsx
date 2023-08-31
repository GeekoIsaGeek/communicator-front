import { useForm, SubmitHandler } from 'react-hook-form';
import { RegistrationFormFields } from '@/types/formTypes';
import FormField from '@/components/UI/FormField';
import SubmitButton from '@/components/UI/SubmitButton';
import { Link } from 'react-router-dom';
import ValidationRules from '@/config/validationRules';
import Error from '@/components/UI/Error';
import { useState } from 'react';
import ImageSelector from '@/components/UI/ImageSelector';
import useRegisterUser from '@/hooks/useRegisterUser';

const RegistrationForm = () => {
   const { register, handleSubmit, formState, watch } =
      useForm<RegistrationFormFields>();

   const [imageBlob, setImageBlob] = useState<Blob | null>(null);
   const [error, setError] = useState<string | null>(null);
   const { sendRequest } = useRegisterUser();

   const registerUser: SubmitHandler<RegistrationFormFields> = async values => {
      setError(null);

      const formData = new FormData();
      Object.entries(values).forEach(field => {
         if (field[0] !== 'password_confirm') {
            formData.append(field[0], field[1]);
         }
      });
      if (imageBlob) {
         formData.append('avatar', imageBlob);
      }

      const { error } = await sendRequest(formData);

      if (error) {
         setError(error);
         return;
      }
   };

   return (
      <form
         onSubmit={handleSubmit(registerUser)}
         className="flex flex-col gap-3"
      >
         <ImageSelector setImageBlob={setImageBlob} />
         <FormField
            type="email"
            name="email"
            placeholder="Email"
            register={register}
         />
         <FormField
            type="text"
            name="firstname"
            placeholder="Firstname"
            register={register}
         />
         <FormField
            type="text"
            name="lastname"
            placeholder="Lastname"
            register={register}
         />
         <FormField
            type="password"
            name="password"
            placeholder="Password"
            register={register}
            rules={ValidationRules.password}
         >
            {formState.errors.password && (
               <Error message={formState.errors.password.message} />
            )}
         </FormField>
         <FormField
            type="password"
            name="password_confirm"
            placeholder="Confirm Password"
            register={register}
            rules={{
               validate: (confirmation: string) => {
                  if (watch('password') !== confirmation)
                     return 'Passwords do not match';
               },
            }}
         >
            {formState.errors.password_confirm && (
               <Error message={formState.errors.password_confirm.message} />
            )}
         </FormField>

         {error && <Error message={error} />}

         <div className="flex gap-[2dvw] sm:gap-10 items-center">
            <SubmitButton>Sign up</SubmitButton>
            <Link
               to="/login"
               className="text-gray-600 hover:text-purple-400 font-bolder transition-colors ease-out"
            >
               Already have an account?
            </Link>
         </div>
      </form>
   );
};

export default RegistrationForm;
