import { useForm, SubmitHandler } from 'react-hook-form';
import { RegistrationFormFields } from '@/types/FormTypes';
import FormField from '@/components/UI/FormField';
import SubmitButton from '@/components/UI/SubmitButton';
import { Link } from 'react-router-dom';
import ValidationRules from '@/config/validationRules';
import Error from '@/components/UI/Error';

const RegistrationForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm<RegistrationFormFields>();

   const submitHandler: SubmitHandler<RegistrationFormFields> = values => {
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
            {errors.password && <Error message={errors.password.message} />}
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
            {errors.password_confirm && (
               <Error message={errors.password_confirm.message} />
            )}
         </FormField>
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
