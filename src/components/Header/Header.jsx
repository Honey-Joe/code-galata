import { blup, design, homeProfile, suganth } from "../../assets/image";
import { Lightbulb, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <>
        <div className=" 2xl:container mx-auto"> 
            <div className=" w-[90%] lg:w-[90%] mx-auto mt-20">
                <div className=" grid grid-cols-1 md:grid-cols-2 w-full items-center">
                    <div className=" order-2 md:order-1 lg:pt-0">
                        <div className=" pt-8 md:pt-12 flex gap-2">
                            <img src={blup} alt="blup" width={23} height={23} />
                            <p className=" font-[LexendDeca] text-[#553cdf]">Gateway to Lifelong Learning</p>
                        </div>
                        <div className=" md:pt-10 pt-5">
                            <p className=" text-[26px] font-[hindu] lg:text-[60px] font-bold text-[#221859] md:leading-tight lg:leading-none md:text-[54px]">Unlock Your Potential</p>
                            <p className=" font-[hindu] lg:text-[60px] text-[26px] font-bold text-[#221859] md:leading-tight lg:leading-none md:text-[54px]">with Online <span className=" relative text-[26px] md:text-[54px] lg:text-[60px]">Learning 
                                <img className=" absolute md:-left-3 md:top-16 -left-2 top-8" src={design} alt="design" />
                                </span>
                            </p>
                            <p className=" font-[LexendDeca] text-[#7F7F7F] pt-3">Discover a world of knowledge and opportunities with our online <br /> education platform pursue a new career.</p>
                        </div>
                        <div className=" flex items-center gap-5 mt-9 md:pt-4 flex-wrap">
                            <button className=" flex items-center gap-2 py-4 bg-[#553CDF] px-8 text-white font-medium font-[LexendDeca] rounded-md hover:bg-white hover:text-[#553CDF] border border-[#553CDF] transition">View All Course <ArrowRight /> </button>
                            <div className=" flex items-center gap-5 md:space-x-16 space-x-24">
                                <div className=" flex items-center relative">
                                    <img src={suganth} className=" md:w-12 w-14 rounded-full bg-white p-1 hover:scale-105 transition" alt="student" />
                                    <img src={suganth} className=" md:w-12 w-14 rounded-full bg-white p-1 absolute top-0 -right-10 md:-right-8 hover:scale-105 transition" alt="student" />
                                    <img src={suganth} className=" md:w-12 w-14 rounded-full absolute top-0 md:-right-16 bg-white p-1  hover:scale-105 transition -right-20" alt="student" />
                                </div>
                                <div className="">
                                    <p className=" text-[24px] font-[hindu] text-[#221859] font-bold leading-6">2k students spa</p>
                                    <p className=" text-[#7F7F7F] font-[LexendDeca]">Joint our online Class</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" md:order-2 order-1 lg:flex justify-end">
                        <img src={homeProfile} alt="home" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header