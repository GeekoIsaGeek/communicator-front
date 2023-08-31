import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginFormFields } from '@/types/formTypes';
import FormField from '@/components/UI/FormField';
import SubmitButton from '@/components/UI/SubmitButton';
import { Link } from 'react-router-dom';
import Error from '@/components/UI/Error';
import ValidationRules from '@/config/validationRules';
import { useState } from 'react';
import useAuthenticateUser from '@/hooks/useAuthenticateUser';

const LoginForm = () => {
   const { register, handleSubmit, formState } = useForm<LoginFormFields>();

   const [error, setError] = useState<string | null>(null);

   const { sendRequest } = useAuthenticateUser();

   const loginUser: SubmitHandler<LoginFormFields> = async values => {
      setError(null);

      const { error } = await sendRequest({
         email: values.email,
         password: values.password,
      });

      if (error) {
         setError(error);
         return;
      }
   };

   return (
      <form onSubmit={handleSubmit(loginUser)} className="flex flex-col gap-3">
         <FormField
            type="email"
            name="email"
            placeholder="Email"
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

         {error && <Error message={error} />}

         <div className="flex justify-between items-center mt-2">
            <SubmitButton>Log in</SubmitButton>
            <Link
               to="/registration"
               className="text-gray-600 hover:text-purple-400 font-bolder transition-colors ease-out dark:text-textDark dark:hover:text-purple-300"
            >
               Create new account
            </Link>
         </div>
      </form>
   );
};

export default LoginForm;
