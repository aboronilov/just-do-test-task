"use client"

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/validators/login";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { Spinner } from "@/components/common"
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/features/authApiSlice';

type Input = z.infer<typeof loginSchema>

const LoginForm = () => {
    const form = useForm<Input>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const [login, { isLoading }] = useLoginMutation()

    const router = useRouter()

    const onSubmit = ({email, password}: Input) => {
        login({email, password})
            .unwrap()
            .then(() => {
                toast.success("Login successfull")
                router.push("/dashboard")
            })
            .catch(() => {
                toast.error("Wrong credentials")
            })
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@domain.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="enter your password" {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    variant="login"
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner /> : "Login"}
                </Button>
            </form>
        </Form>

    )
}

export default LoginForm