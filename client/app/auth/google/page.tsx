"use client"

import { Spinner } from '@/components/common'
import useSocialAuth from '@/lib/useSocialAuth'
import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice'

type Props = {}

const provider = "google-oauth2"

const GoogleLogin = (props: Props) => {
  const [googleAuthenticate] = useSocialAuthenticateMutation()
  useSocialAuth(googleAuthenticate, provider)

  return (
    <div className="my-8">
      <Spinner lg />
    </div>
  )
}

export default GoogleLogin