import BaseAuth from '@/components/common/BaseAuth';
import LoginForm from '@/components/forms/LoginForm'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <BaseAuth
      title="Login"
      description="With your credentials"
      form=<LoginForm />
      redirectHref="/auth/register"
      retirectText="Don&apos;t have an account?"
      redirectTitle="Register here"
    />
  )
}

export default LoginPage
