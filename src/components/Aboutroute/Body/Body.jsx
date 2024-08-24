import CounterAu from "../../CounterAu/CounterAu"
import Course from "../../Course/Course"
import HowWeWork from "../../HowWeWork/HowWeWork"
import InstructorAu from "../../InstructorAu/InstructorAu"
import Faq from "../Faq/Faq"

const Body = () => {
  return (
    <>
        <div className=''>
          <CounterAu/>
          <Course/>
          <HowWeWork/>
          <InstructorAu/>
          <Faq></Faq>
        </div>
    </>
  )
}

export default Body