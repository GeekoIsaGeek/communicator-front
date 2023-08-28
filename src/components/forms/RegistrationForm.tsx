import { useForm, SubmitHandler } from 'react-hook-form';
import { RegistrationFormFields } from '@/types/FormTypes';
import FormField from '@/components/UI/FormField';
import SubmitButton from '@/components/UI/SubmitButton';
import { Link } from 'react-router-dom';
import ValidationRules from '@/config/validationRules';
import Error from '@/components/UI/Error';
import { useState } from 'react';
import useAuthenticateUser from '@/hooks/useAuthenticateUser';

const RegistrationForm = () => {
   const { register, handleSubmit, formState, watch } =
      useForm<RegistrationFormFields>();

   const [error, setError] = useState<string | null>(null);

   const { sendRequest } = useAuthenticateUser('/register');

   const registerUser: SubmitHandler<RegistrationFormFields> = async values => {
      setError(null);

      const { error } = await sendRequest({
         email: values.email,
         password: values.password,
         firstname: values.firstname,
         lastname: values.lastname,
      });

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
