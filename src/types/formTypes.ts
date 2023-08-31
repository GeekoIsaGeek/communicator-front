export interface LoginFormFields {
   email: string;
   password: string;
}
export interface RegistrationFormFields extends LoginFormFields {
   firstname: string;
   lastname: string;
   password_confirm: string;
   avatar?: string;
}
