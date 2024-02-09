"use client"

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/validators/register";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

type Input = z.infer<typeof registerSchema>

const RegisterForm = () => {
    const form = useForm<Input>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    })

    const onSubmit = (data: Input) => {
        toast.success(data.email)
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
                    name="confirm_password"
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
                >
                    Register
                </Button>
            </form>
        </Form>

    )
}

export default RegisterForm