"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggler } from "@/components/common"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useLogoutMutation } from '@/redux/features/authApiSlice'
import { logout as logoutState } from '@/redux/features/authSlice'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

type Props = {}

const Header = (props: Props) => {
    const router = useRouter()

    const dispatch = useAppDispatch()

    const { isAuthenticated } = useAppSelector(state => state.auth)

    const [logout] = useLogoutMutation()

    const handleLogOut = () => {
        logout(undefined)
            .unwrap()
            .then(() => {
                dispatch(logoutState())
                toast.success("Logout successfully")
                router.push("/auth/login/")
            })
            .catch(() => {
                toast.error("Unable to logout")
            })
    }

    return (
        <header className='flex items-center justify-between px-8 py-5 border-destructive border rounded-md'>
            <Link href="/" className='flex items-center cursor-pointer'>
                <div className=' dark:bg-black w-fit'>
                    <Image
                        src='https://justdo-full.ru/source/img/logo.svg'
                        alt='logo'
                        className='invert'
                        height={70}
                        width={70}
                    />
                </div>
            </Link>
            <h1 className='font-bold sm:text-sm md:text-lg'>Fullstack developer test task</h1>
            <div className="flex items-center justify-between gap-4">
                {
                    isAuthenticated
                        ?
                        <Button variant="destructive" onClick={handleLogOut}>Logout</Button>
                        :
                        <Button variant="outline" onClick={() => router.push("/auth/login/")}>Login</Button>
                }
                <ThemeToggler className="" />
            </div>
        </header>
    )
}

export default Header