import React from 'react'
import Navbar from '../NavBar/Navbar'
import ReviewSection from '../ReviewSection/ReviewSection'
import Topcourse from '../Topcourse/Topcourse'
import Home from '../Header/Home'

const Body = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <ReviewSection></ReviewSection>
      <Topcourse></Topcourse>
      <ReviewSection></ReviewSection>
    </>
  )
}

export default Body
