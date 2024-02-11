import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from 'next/link';
import GoogleButton from './GoogleButton';


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
        <section className='flex items-center justify-center flex-col mt-4'>
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
                        <GoogleButton />
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