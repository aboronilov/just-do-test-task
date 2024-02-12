"use client"

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";


export default function Page() {
  const {isAuthenticated} = useAppSelector(state => state.auth)
  const router = useRouter()

  if (isAuthenticated) {
    router.push("/dashboard")
  } else {
    router.push("/auth/login")
  }
}
