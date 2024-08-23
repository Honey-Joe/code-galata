import { Facebook, Twitter, Instagram ,Linkedin } from "lucide-react"
import { logo } from "../../../assets/image"

const Footer = () => {
  return (
    <>
      <div>
        <div className=''>
          <div className=' 2xl:container w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-24'>
            <div className=' flex flex-col gap-10 pb-5 md:pb-0'>
              <img src={logo} alt="" width={200}/>
              <p className=''>We’re always in search for talented and motivated people. Don’t be shy introduce yourself!
              </p>
              <div>
              <div className="flex gap-4">
                  <Facebook  className="cursor-pointer stroke-[#6B7385] h-12 w-12 hover:stroke-white transition hover:bg-[#2f57ef] rounded-full p-3"/>
                  <Twitter className="cursor-pointer stroke-[#6B7385] h-12 w-12 hover:stroke-white transition hover:bg-[#2f57ef] rounded-full p-3"></Twitter>
                  <Instagram className="cursor-pointer stroke-[#6B7385] h-12 w-12 hover:stroke-white transition hover:bg-[#2f57ef] rounded-full p-3"></Instagram>
                  <Linkedin className="cursor-pointer stroke-[#6B7385] h-12 w-12 hover:stroke-white transition hover:bg-[#2f57ef] rounded-full p-3"></Linkedin>
              </div>
              </div>
            </div>

            <div className=' flex items-center gap-28'>
              <div className=' flex flex-col gap-10 '>
                <h1 className=' font-[poppions-m] text-[22px]'>
                  Services.
                </h1>
                <ul className=' pt-4'>
                  <li className=' pb-5'><a href=""> About Company</a></li>
                  <li className=' pb-5'><a href=""> Meet Our Team</a></li>
                  <li className=' pb-5'><a href="">Ltest Blog</a></li>
                  <li className=' pb-5'><a href=""> Contact Us</a></li>
                  <li className=' pb-5'><a href=""> Testimonials</a></li>
                </ul>
              </div>
              <div className=' flex flex-col gap-10 '>
                <h1 className=' font-[poppions-m] text-[22px]'>
                  Useful Links
                </h1>
                <ul className=' pt-4'>
                  <li className=' pb-5'><a href=""> About Company</a></li>
                  <li className=' pb-5'><a href=""> Meet Our Team</a></li>
                  <li className=' pb-5'><a href="">Ltest Blog</a></li>
                  <li className=' pb-5'><a href=""> Contact Us</a></li>
                  <li className=' pb-5'><a href=""> Testimonials</a></li>
                </ul>
              </div>
            </div>

            <div className=' flex justify-end'>
                  <div className='flex flex-col gap-10'>
                    <h1 className=' font-[poppions-m] text-[22px]'>
                      Newsletter
                    </h1>
                    <p className=' pt-4'>Globally monetize plug-and-play data it <br />solu <br />
                    monotonectally disseminate oriented <br />busine <br />
                    multifunctional mind design.
                    </p>
                    <div className=' relative'>
                      <input className=' pl-3 pr-28 py-4 rounded-lg bg-[#161A2B] ' type="text" name="" id=""  placeholder='Enter Your E-mail'/>
                      {/* <img className=' absolute top-[0%] p-4 right-0 z-50 bg-[#FF3D00] rounded-r-lg' src={icon4} alt="" />  */}
                    </div>
                  </div>
            </div>

            
          </div>
          <div className='flex items-center justify-between w-[90%] md:w-[80%] mx-auto pt-[100px] pb-5'>
              <div>
                <p className=' font-[poppions-r]'> &#169; Copyright 2024 By Solutek </p>
              </div>
              <div className=' flex items-center gap-2'>
                <p className=' font-[poppions-r] text-nowrap'>Privacy Policy</p>
                <p className=' font-[poppions-r]'>Supports</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer