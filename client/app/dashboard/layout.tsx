import { RequireAuth } from "@/components/utils";

type Props = {
    children: React.ReactNode
}

const DahsboardLayout = ({children}: Props) => {
  return (
    <RequireAuth>{children}</RequireAuth>
  )
}

export default DahsboardLayout