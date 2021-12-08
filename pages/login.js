import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
  }, [])

    return (
     <Wrapper>
        <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"/>
        <Title>Log in to access your account</Title>
        <HeadImage src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_956,h_537/v1535742591/assets/ce/fce502-ac10-474a-9bfd-825b1fbce7a5/original/Driveroverview.svg" />
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
     </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
 flex flex-col h-screen w-screen bg-gray-200 p-4
`
const SignInButton = tw.button`
 bg-black text-white text-center py-4 mt-8 self-center w-full 
`
const UberLogo = tw.img`
 h-20 w-auto object-contain self-start
`
const Title =tw.div`
 text-5xl pt-4 text-gray-500
`
const HeadImage =tw.img`
 object-contain w-full mt-2
`
