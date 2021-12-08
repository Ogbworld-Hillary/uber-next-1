import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
   return onAuthStateChanged(auth, user => {
     if (user) {
       setUser({
         name: user.displayName,
         photoUrl: user.photoURL,
       })
     } else {
       setUser(null)
       router.push('/login')
     }
   })
  }, [])

  return (
    <Wrapper>
     <Map />
     <ActionItems>
       <Header>
         <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"/>
         <Profile>
           <Name>{user && user.name}</Name>
           <UserImage src={user && user.photoUrl} onClick={() => signOut(auth)} />
         </Profile>
       </Header>
       <ActionButtons>
         <Link href="/search">
         <ActionButton>
           <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_341,h_192/v1597151255/assets/af/a978c2-d3de-4b6b-a80e-001ef05370ff/original/UberX.jpg"/>
            Ride
         </ActionButton>
         </Link>
           <ActionButton>
           <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1630694937/assets/43/a4d033-3346-4b1a-a42d-af4fbe2e935e/original/uber-bike.png" />
             Wheels
           </ActionButton>
           <ActionButton>
           <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_341,h_192/v1631133118/assets/9f/55bb20-9288-42a6-931d-c42996c6f593/original/uber-reserve.png" />
             Reserve
           </ActionButton>
       </ActionButtons>
       <InputButton>
         Where to?
         </InputButton>
     </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
 flex justify-between items-center
`
const UberLogo = tw.img`
 h-20
`
const Profile = tw.div`
 flex items-center
`

const Name = tw.div`
 mr-4 w-20 text-sm
`

const UserImage = tw.img`
 h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer 
`

const ActionButtons = tw.div`
 flex
`

const ActionButton = tw.div`
 flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition cursor-pointer text-xl
`
const ActionButtonImage = tw.img`
 h-3/5
`
const InputButton = tw.div`
 h-20 bg-gray-200 text-2xl p-4 items-center mt-8
`
