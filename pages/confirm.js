import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    const router = useRouter()
  const { pickup, dropoff } = router.query


    const [ pickupCoordinates, setPickupCoordinates ] = useState([0, 0]);
    const [ dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoib2dib25uYWhpbGxhcnkiLCJhIjoiY2t2NmVleDg3MndmajJwcXd3bGdiNXMzYyJ9.OW3tIDkFQDu4227t3lJ33Q',
            limit: 1
        }))
         .then(response => response.json())
         .then(data => {
            setPickupCoordinates(data.features[0].center)
         })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1Ijoib2dib25uYWhpbGxhcnkiLCJhIjoiY2t2NmVleDg3MndmajJwcXd3bGdiNXMzYyJ9.OW3tIDkFQDu4227t3lJ33Q",
            limit: 1
        }))
         .then(response => response.json())
         .then(data => {
             setDropoffCoordinates(data.features[0].center)
         })
    }

    useEffect(() => {
      getPickupCoordinates(pickup);
      getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
         <ButtonContainer>
          <Link href="/search">
          <BackButton src="https://static.thenounproject.com/png/390380-200.png" />
          </Link>
         </ButtonContainer>
         <Map 
           pickupCoordinates={pickupCoordinates}
           dropoffCoordinates={dropoffCoordinates}
         />
         <RideContainer>
             <RideSelector 
              pickupCoordinates={pickupCoordinates}
              dropoffCoordinates={dropoffCoordinates}
             />
           <ConfirmButtonContainer>
             <ConfirmButton>
                Confirm
             </ConfirmButton>
           </ConfirmButtonContainer>
         </RideContainer>
        </Wrapper>
    )
}

export default Confirm


const Wrapper = tw.div`
 flex h-screen flex-col
`
const RideContainer = tw.div`
 flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
 border-t-2
`
const ConfirmButton = tw.div`
 bg-black text-white text-center mb-3 mx-4 py-4 text-xl cursor-pointer
`

const ButtonContainer = tw.div`
 rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton =tw.img`
 h-12 object-contain
`
