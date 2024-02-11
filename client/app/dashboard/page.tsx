"use client"

import React from 'react'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { Spinner } from '@/components/common';

type Props = {}

// пока сделано через клиентский, может в Лама туториале передлаю под серверный

const DashboardPage = (props: Props) => {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery(undefined);
  console.log(user)
  
  return (
    <div>Yo</div>
  )
}

export default DashboardPage