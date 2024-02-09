"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/validators/register";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { useRouter } from "next/navigation";
import { Spinner } from '@/components/common'

type Input = z.infer<typeof registerSchema>

const RegisterForm = () => {
    const form = useForm<Input>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            re_password: ""
        }
    })

    const [register, { isLoading, error }] = useRegisterMutation()

    const router = useRouter()

    const onSubmit = ({
        first_name,
        last_name,
        email,
        password,
        re_password
    }: Input) => {
        if (password !== re_password) {
            toast.error("Passwords do not match!")
            return
        }

        register({ first_name, last_name, email, password, re_password })
            .unwrap()
            .then(() => {
                toast.success(`User with email ${email} successfully created`)
                router.push("/auth/login/")
            })
            .catch((error) => {
                let errorMessage = ""
                let key: keyof typeof error.data;

                for (key in error.data) {
                    const value = error.data[key]

                    if (value.length > 1) {
                        errorMessage = value.join(", ")
                    } else {
                        errorMessage = value
                    }
                }
                toast.error(`Failed to create user - ${errorMessage}`)
            })
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                                <Input placeholder="minimum 8 characters" {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="re_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm password</FormLabel>
                            <FormControl>
                                <Input placeholder="minimum 8 characters" {...field} type="password" />
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
                    {isLoading ? <Spinner /> : "Register"}
                </Button>
            </form>
        </Form>

    )
}

export default RegisterForm