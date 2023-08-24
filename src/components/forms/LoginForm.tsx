import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginFormFields } from '@/types/FormTypes';
import FormField from '@/components/UI/FormField';
import SubmitButton from '@/components/UI/SubmitButton';
import { Link } from 'react-router-dom';
import Error from '@/components/UI/Error';
import ValidationRules from '@/config/validationRules';

const LoginForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFormFields>();

   const submitHandler: SubmitHandler<LoginFormFields> = values => {
      console.log(values);
   };

   return (
      <form
         onSubmit={handleSubmit(submitHandler)}
         className="flex flex-col gap-3"
      >
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
            {errors.password && <Error message={errors.password.message} />}
         </FormField>
         <div className="flex gap-[4dvw] xs:gap-10 items-center">
            <SubmitButton>Log in</SubmitButton>
            <Link
               to="/registration"
               className="text-gray-600 hover:text-purple-400 font-bolder transition-colors ease-out"
            >
               Create new account
            </Link>
         </div>
      </form>
   );
};

export default LoginForm;
