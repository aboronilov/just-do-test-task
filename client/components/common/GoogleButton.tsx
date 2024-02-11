"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { continueWithGoogle } from '@/lib/soicalAuth'

type Props = {}

const GoogleButton = (props: Props) => {
  return (
    <Button 
        variant="google" 
        onClick={continueWithGoogle}
    >
        Login with Google
    </Button>
  )
}

export default GoogleButton