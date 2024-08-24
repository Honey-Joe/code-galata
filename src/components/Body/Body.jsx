import React from 'react'
import ReviewSection from '../ReviewSection/ReviewSection'
import Topcourse from '../Topcourse/Topcourse'
import Course from '../Course/Course'
import NewsLetter from '../NewsLetter/NewsLetter'
import HowWeWork from '../HowWeWork/HowWeWork'
import Homebody from '../Homecard/Homebody'

const Body = () => {
  return (
    <>
      {/* <Course></Course> */}
      <Homebody></Homebody>
      <Topcourse></Topcourse>
       <HowWeWork/>
       <ReviewSection></ReviewSection>
       <NewsLetter/>
    </>
  )
}

export default Body
