import LoginForm from '@/components/forms/LoginForm'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <section className='flex h-screen items-center justify-center'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>With your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col w-full space-y-3">
            <CardDescription>Or</CardDescription>
            <Button variant="google">Login with Google</Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

export default LoginPage
