import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className="min-h-screnn flex justify-center items-center">
      <SignIn>SignInPage</SignIn>
    </div>
  )
}

export default SignInPage
