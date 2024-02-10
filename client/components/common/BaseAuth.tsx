import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from 'next/link';

type Props = {
    title: string;
    description: string;
    form: React.ReactNode;
    redirectHref: string
    retirectText: string,
    redirectTitle: string
}

const BaseAuth = ({
    title,
    description,
    form,
    redirectHref,
    retirectText,
    redirectTitle
}: Props) => {
    return (
        <section className='flex mt-4 items-center justify-center flex-col'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {form}
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col w-full space-y-3">
                        <CardDescription>Or</CardDescription>
                        <Button variant="google">Login with Google</Button>
                    </div>
                </CardFooter>
            </Card>
            <p className='mt-10 text-center text-sm font-light'>
                {retirectText}{' '}
                <Link
                    href={redirectHref}
                    className='font-bold leading-6'
                >
                    {redirectTitle}
                </Link>
            </p>
        </section>
    )
}

export default BaseAuth