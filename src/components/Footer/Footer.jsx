
import { Facebook, Youtube, Linkedin, Phone, Twitter } from "lucide-react"
import { navlogo, navlogo1 } from "../../assets/image"


const Footer = () => {
  return (
    <>
      <div>
        <div className=' bg-[#061E43]'>
          <div className=' 2xl:container w-[90%] lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-24 gap-10'> 
            <div className=' flex flex-col gap-3 pb-5 md:pb-0'>
              <img className=" pt-2 -ml-2" src={navlogo1} alt="logo" width={150}/>
              <p className=' text-[#B2BDcD] text-wrap font-[hindu] text-[16px] leading-7 pt-3'>when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.
              </p>
              <p className=" text-white font-[hindu] pt-3">70 Kaliamman Kovil Street, Palanganatham Pasumpon Nagar, Madurai</p>
              <p className=" text-white font-[hindu]">+91 80729 48266</p>
              <div>
              <div className="flex gap-4">
                  <a  href=""><Facebook  className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white"/></a>
                  <a  href=""><Twitter className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white"/></a>
                  <a href=""><Phone className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white"/></a>
                  <a href=""><Linkedin className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white"/></a>
                  <a href=""><Youtube className="cursor-pointer w-5 transition duration-300 hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white"/></a>
              </div>
              </div>
            </div>

            <div className=' flex lg:justify-center md:pl-10'>
              <div className=' flex flex-col gap-4 '>
                <h1 className=' text-white font-[lexend] text-[24px] font-bold'>
                  Resourcces
                </h1>
                <ul className=' text-[#B2BDcD] pt-4'>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div> <a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF] ">About</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF]  group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF]"> Contact</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF]">Help Center</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF]"> Refund</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF]"> Conditions</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF]"> Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            <div className=' flex lg:justify-start lg:pl-20 '>
              <div className=' flex flex-col gap-4 '>
                <h1 className=' text-white font-[lexend] text-[24px] font-bold'>
                Courses
                </h1>
                <ul className=' text-[#B2BDcD] pt-4'>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium  group-hover:text-[#1363DF] "> Life Coach</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF] "> UI/UX Figma</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF] ">Web Design</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF] "> Java</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF] "> Web Development</a></li>
                  <li className=' pb-4 flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#1363DF] group-hover:w-4" id="move"></div><a href="" className=" font-[hindu] font-medium group-hover:text-[#1363DF] ">SEO Optimize</a></li>
                </ul>
              </div>
            </div>

            <div className=' flex lg:justify-center'>
                  <div className='flex flex-col gap-4 '>
                    <h1 className=' text-white font-[lexend] text-[24px] font-bold pb-5'>
                      Working Hours
                    </h1>
                    <div className=" flex w-full items-center gap-x-20 border-b-[2px] border-[#39557E] pb-5">
                      <p className=" text-[16px] font-[hindu] font-bold text-white">Mon-Fri</p>
                      <p className=" font-[hindu] text-[#B2BDcD]">8:00 AM - 5:00 PM</p>
                    </div>
                    <div className=" flex items-center w-full gap-x-20 border-b-[2px] border-[#39557E] pb-5">
                      <p className=" text-[16px] font-[hindu] font-bold text-white">Mon-Fri</p>
                      <p className=" font-[hindu] text-[#b3bac4]">9:00 AM - 6:00 PM</p>
                    </div>
                    <div className=" flex w-full gap-x-20 pb-5 text-nowrap items-center">
                      <p className=" text-[16px] font-[hindu] font-bold text-white">Mon-Fri</p>
                      <p className=" font-[hindu] text-[#b3bac4]">10:00 AM - 8:00 PM</p>
                    </div>
                    
                  </div>
            </div>
          </div>

          <div className=" w-full border-t-[1px] py-7 mt-24 border-[#1d4074]">
            <div className=" 3xl:container w-[90%] xl:w-[90%] mx-auto">
              <div className=" lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col items-center ">
                <div>
                  <p className=" text-[#8798b3] text-[15px] font-[lexend]">Copyright © 2024 code galatta. All rights reserved.</p>
                </div>
                <div className=" flex gap-2 lg:justify-end md:pt-3 lg:p-0">
                  <p className=" text-[#8798b3] text-[15px] font-[lexend  text-[15px] font-[lexend] font-medium">Privacy Policy</p>
                  <p className=" text-[#8798b3] text-[15px] font-[lexend] font-medium">.</p>
                  <p className=" text-[#8798b3] text-[15px] font-[lexend] font-medium">Terms & Conditions</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Footer