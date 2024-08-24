import { Headphones, Mail, MapPin } from "lucide-react"

const ContactCard = () => {
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 pb-32 gap-7">
      <div className=" p-10 bg-white rounded-lg pb-10 flex flex-col hover:shadow-xl shadow-lg items-center">
        <Headphones className="  h-16 w-[45px] stroke-[#2f57ef]"/>
        <p className=" font-bold font-[LexendDeca] text-[20px] text-[#192335] pt-4 ">Contact Phone Number</p>
        <p className=" text-[18px] font-[LexendDeca] text-[#6b7385] pt-4"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
        <p className=" text-[18px] font-[LexendDeca] text-[#6b7385]"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
      </div>
      <div className=" p-10 bg-white rounded-lg pb-10 flex flex-col items-center hover:shadow-xl shadow-lg">
        <Mail className="  h-16 w-[45px] stroke-[#2f57ef]"/>
        <p className=" font-bold font-[LexendDeca] text-[20px] text-[#192335] pt-4 ">Our Email Address</p>
        <p className=" text-[18px] font-[LexendDeca] text-[#6b7385] pt-4">admin@gmail.com</p>
        <p className=" text-[18px] font-[LexendDeca] text-[#6b7385]">example@gmail.com</p>
      </div>
      <div className=" p-10 bg-white rounded-lg pb-10 flex flex-col items-center hover:shadow-xl shadow-lg">
        <MapPin className="  h-16 w-[45px] stroke-[#2f57ef]"/>
        <p className=" font-bold font-[LexendDeca] text-[20px] text-[#192335] pt-4 ">Our Location</p>
        <p className=" text-[18px] font-[LexendDeca] text-[#6b7385] pt-4 text-center">70 Kaliamman Kovil Street, Palanganatham Pasumpon Nagar, Madurai</p>
      </div>
    </div>
    </>
  )
}

export default ContactCard