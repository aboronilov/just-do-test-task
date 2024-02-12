"use client"

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import SearchInfo from '@/components/common/SearchInfo';
import { useAppSelector } from '@/redux/hooks';

const DashboardPage = () => {
  const { isSuperUser } = useAppSelector(state => state.auth)
  
  return (
    <section className="container pt-5">
      <Card>
        <CardHeader>
          <CardTitle>Mailing statistics dashboard</CardTitle>
          <CardDescription>Data for the choosen period</CardDescription>
        </CardHeader>
        <CardContent>
          <SearchInfo />
        </CardContent>
        <CardFooter>
          <p>Your current status <span className='text-red-300'>{isSuperUser ? "Admin" : "User"}</span></p>
        </CardFooter>
      </Card>
    </section>
  )
}

export default DashboardPage