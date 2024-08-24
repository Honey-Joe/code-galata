import { Twitter, Linkedin , Facebook,File ,User } from "lucide-react"
const InstructorCard = (props) => {
  return (
    <>
        <div className="  shadow-xl p-2 pb-3 rounded-2xl border-[2px]  overflow-hidden mt-10 md:mt-16">
           <div className=" inline-block overflow-hidden relative">
                <img className="hover:scale-125 transition-transform duration-500 object-cover" src={props.team1} alt="profile" />
                <div className=" flex flex-col justify-center bg-black absolute bottom-0 ">
                    <div className=" hover:bg-[#1176F0] opacity-90 p-[15px]"><a href=""><Twitter className=" stroke-white w-4 h-4"/></a></div>
                    <div className=" hover:bg-[#1176F0] opacity-90 p-[15px]"> <a href=""><Linkedin className=" stroke-white fill-white h-4 w-4"/></a> </div>
                    <div className=" hover:bg-[#1176F0] opacity-90 p-[15px]"><a href=""><Facebook className=" stroke-white fill-white h-4 w-4"/></a></div>
                </div>
            </div>
            <h1 className=" text-center font-[dmsans-b] text-[20px] pt-3">{props.name}</h1>
            <p className=" text-center font-[dmsans] text-[16px] text-slate-800">{props.domain}</p>
            <div className=" flex gap-2 justify-center items-end pt-2 lg:flex-col lg:items-center xl:flex xl:items-center" id="change">
                <div className=" flex items-end gap-2">
                    <File className=" stroke-2 w-[17px] stroke-[#5f6fff]"/>
                    <div id="course" className=" flex gap-2  w-fit items-end">
                        <p className=" font-[helvetica] text-[15px] text-[#414550]">{props.course_no}</p>
                        <p className="font-[helvetica] text-[15px] text-[#414550]">{props.course}</p>
                    </div>
                </div>
                <div className=" flex items-end gap-2">
                    <User className=" stroke-2 w-[17px] stroke-[#5f6fff]"/>
                    <div id="student" className=" flex gap-2 w-fit items-end">
                        <p className="font-[helvetica] text-[15px] text-[#414550]">{props.student_no}</p>
                        <p className=" font-[helvetica] text-[15px] text-[#414550] ">{props.student}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InstructorCard