import React from 'react'
import ReviewSection from '../ReviewSection/ReviewSection'
import Topcourse from '../Topcourse/Topcourse'
import Course from '../Course/Course'
import NewsLetter from '../NewsLetter/NewsLetter'
import HowWeWork from '../HowWeWork/HowWeWork'

const Body = () => {
  return (
    <>
      {/* <Course></Course> */}
      <Topcourse></Topcourse>
       <ReviewSection></ReviewSection>
       <HowWeWork/>
       <NewsLetter/>
    </>
  )
}

export default Body
