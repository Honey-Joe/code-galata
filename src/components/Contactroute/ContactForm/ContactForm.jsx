import { contactimg } from "../../../assets/image"
import Button from "../Button/Button"
const ContactForm = () => {
  return (
    <>
        <div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                <div className=" w-full">
                    <img src={contactimg} alt="Contactimage" className=" bg-cover rounded-lg w-full"/>
                </div>
                <div className=" shadow-md rounded-lg  px-10 py-8 bg-white">
                    <h2 className="  text-center font-[LexendDeca] text-[14px] font-bold text-[#2F57EF] bg-[#E4E9FD] py-2 px-6  rounded-full w-fit">EDUCATION FOR EVERYONE</h2>
                    <h1 className=" md:text-[28px] lg:text-[34px] font-bold font-[LexendDeca] pt-5 leading-tight">Get a Free Course You Can Contact With Me</h1>
                    <div className=" pt-10">
                        <form action="get">
                            <div className=" relative">
                                <input id="name" type="text" className=" border-b-2 py-1 focus:outline-none focus:border-[#2F57EF] focus:border-b-3 transition-colors peer w-full" />
                                <label className=" absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs font-[LexendDeca] text-[18px] text-[#6b7385] peer-focus:-translate-y-6 transition -translate-y-2 peer-focus:text-[#2F57EF]" htmlFor="name">Name</label>
                            </div>
                            <div className=" relative my-12">
                                <input id="email" type="text" className=" border-b-2 py-1 focus:outline-none focus:border-[#2F57EF] focus:border-b-3 transition-colors peer w-full" />
                                <label className=" absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs font-[LexendDeca] text-[18px] text-[#6b7385] peer-focus:-translate-y-6 transition -translate-y-2 peer-focus:text-[#2F57EF]" htmlFor="email">Email</label>
                            </div>
                            <div className=" relative my-12">
                                <input id="yoursubject" type="text" className=" border-b-2 py-1 focus:outline-none focus:border-[#2F57EF] focus:border-b-3 transition-colors peer w-full" />
                                <label className=" absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs font-[LexendDeca] text-[18px] text-[#6b7385] peer-focus:-translate-y-6 transition -translate-y-2 peer-focus:text-[#2F57EF]" htmlFor="yoursubject">Your Subject</label>
                            </div>
                            <div className=" relative mb-10">
                                <textarea className=" border-b-2 py-1 focus:outline-none focus:border-[#2F57EF] focus:border-b-3 transition-colors peer w-full" rows="4" name="message" id="message"></textarea>
                                <label className=" absolute left-0 top-1 cursor-text focus:text-xs peer-focus:text-xs font-[LexendDeca] text-[18px] text-[#6b7385] peer-focus:-translate-y-6 transition -translate-y-2 peer-focus:text-[#2F57EF]" htmlFor="messages">Message</label>
                            </div>
                            <div className="">
                                <Button/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ContactForm