import React from 'react'
import Navbar from '../NavBar/Navbar'
import ReviewSection from '../ReviewSection/ReviewSection'
import Topcourse from '../Topcourse/Topcourse'
import Home from '../Header/Home'
import Course from '../Course/Course'

const Body = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Course></Course>
      <Topcourse></Topcourse>
        <ReviewSection></ReviewSection>
    </>
  )
}

export default Body
