"use client"

import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Spinner } from '@/components/common'
import { toast } from "sonner"

type Props = {
    children: React.ReactNode
}

const RequireAuth = ({ children }: Props) => {
    const { isLoading, isAuthenticated } = useAppSelector(state => state.auth)
    const router = useRouter()

    if (isLoading) {
        return (
            <div className='flex justify-center mt-8'>
                <Spinner lg />
            </div>
        )

    }

    if (!isAuthenticated) {
        router.push("/auth/login/")
    }

    return (
        <>
            {children}
        </>
    )
}

export default RequireAuth