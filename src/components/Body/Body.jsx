import React from 'react'
import ReviewSection from '../ReviewSection/ReviewSection'
import Topcourse from '../Topcourse/Topcourse'
import Course from '../Course/Course'
import NewsLetter from '../NewsLetter/NewsLetter'
import HowWeWork from '../HowWeWork/HowWeWork'
import Homebody from '../Homecard/Homebody'
import Achievment from '../Achievment/Achievment'

const Body = () => {
  return (
    <>
      {/* <Course></Course> */}
      <Achievment></Achievment>

      <Homebody></Homebody>
      <Topcourse></Topcourse>
       <HowWeWork/>
       <ReviewSection></ReviewSection>
       <NewsLetter/>
    </>
  )
}

export default Body
