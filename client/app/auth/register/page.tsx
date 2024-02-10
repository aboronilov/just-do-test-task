import BaseAuth from '@/components/common/BaseAuth';
import RegisterForm from '@/components/forms/RegisterForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from 'next/link';

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