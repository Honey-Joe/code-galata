import { CardApi } from "../../../API/CardApi"
import InstructorCard from "../InstructorCard/InstructorCard"

const Instructor = () => {
  return (
    <>
        <div className=" 2xl:container mx-auto mt-20">
            <div className=" w-[90%] lg:w-[90%] mx-auto">
                <div className=" text-center">
                    <h1 className=" text-[24px] font-bold lg:text-[42px] md:text-[24px] font-[LexendDeca] text-[#1176F0]">Meet our Instructors</h1>
                    <p className=" text-[#4a5355] leading-7 md:px-[59px] lg:px-[110px] text-[12px] font-[helvetica] lg:text-[16px] md:text-[14px] pt-3" id="text">We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.</p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 gap-1 md:gap-6">
                  {
                    CardApi.map((e,index)=>{
                      return(
                        <>
                          <div key={index}> 
                            <InstructorCard team1={e.team1}
                            name={e.name}
                            domain={e.domain}
                            course_no={e.course_no}
                            course={e.course}
                            student_no={e.student_no}
                            student={e.student}
                            />
                          </div>
                        </>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    </>
  )
}

export default Instructor