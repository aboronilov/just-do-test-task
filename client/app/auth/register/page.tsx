import RegisterForm from '@/components/forms/RegisterForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from 'next/link';

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <section className='flex mt-4 items-center justify-center flex-col'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>New account</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col w-full space-y-3">
            <CardDescription>Or</CardDescription>
            <Button variant="google">Continue with Google</Button>
          </div>
        </CardFooter>
      </Card>
      <p className='mt-10 text-center text-sm font-light'>
        Allready have an account?{' '}
        <Link
          href='/auth/login'
          className='font-bold leading-6'
        >
          Login here
        </Link>
      </p>
    </section>
  )
}

export default RegisterPage