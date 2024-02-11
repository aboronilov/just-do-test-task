import BaseAuth from '@/components/common/BaseAuth';
import RegisterForm from '@/components/forms/RegisterForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Just DO | Register',
	description: 'Full Auth register page',
};

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <BaseAuth
      title="Register"
      description="New account"
      form=<RegisterForm />
      redirectHref="/auth/login"
      retirectText="Allready have an account?"
      redirectTitle="Login here"
    />
  )
}

export default RegisterPage