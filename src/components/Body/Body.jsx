import React from 'react'
import Navbar from '../NavBar/Navbar'
import ReviewSection from '../ReviewSection/ReviewSection'
import Topcourse from '../Topcourse/Topcourse'

const Body = () => {
  return (
    <>
      <Navbar/>
      <ReviewSection></ReviewSection>
      <Topcourse></Topcourse>
        <ReviewSection></ReviewSection>
    </>
  )
}

export default Body
