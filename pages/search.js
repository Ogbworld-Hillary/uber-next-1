import Link from 'next/link'
import React, { useState } from 'react'
import tw from "tailwind-styled-components"


const Search = () => {

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

   console.log(pickup)
   console.log(dropoff)
    return (
      <Wrapper>
        <ButtonContainer>
         <Link href="/">
          <BackButton src="https://static.thenounproject.com/png/390380-200.png" />
          </Link>
        </ButtonContainer>
        <InputContainer>
         <FromToIcons>
           <Circle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6axqVhCkZjWrJGy54hnGprhR3UNpPTShKyQ&usqp=CAU" />
           <Line src="https://static.thenounproject.com/png/2681818-200.png" />

            <Square src="https://cdn.pixabay.com/photo/2013/07/13/10/19/button-156975_960_720.png" />
         </FromToIcons>
         <InputBoxes>
           <Input 
             placeholder="Enter pickup location" 
             value={pickup}
             onChange={(e) => setPickup(e.target.value)}
            />
           <Input 
             placeholder="Where to?" 
             value={dropoff}
             onChange={(e) => setDropoff(e.target.value)}
            />
         </InputBoxes>
         <PlusIcon src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-plus-thin.png" />
        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://www.freeiconspng.com/uploads/white-star-icon-12.png" />
            Saved Places
        </SavedPlaces>
        <Link href={{ 
             pathname: "/confirm", 
             query: { 
               pickup: pickup,
               dropoff: dropoff
               } 
              }}>
        <ConfirmButtonContainer>
          Confirm Locations
        </ConfirmButtonContainer>
        </Link>
      </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
 bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
 bg-white px-4 
`
const BackButton = tw.img`
 h-12 cursor-pointer
`
const InputContainer = tw.div`
 bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div`
 w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
 h-2.5
`
const Line = tw.img`
 h-10
`
const Square = tw.img`
 h-3
`        
const InputBoxes = tw.div`
 flex flex-col flex-1
`
const Input = tw.input`
 h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img`
 w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
 bg-gray-400 w-10 h-10 p-1 rounded-full mr-2
`
const ConfirmButtonContainer = tw.div`
 bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`
