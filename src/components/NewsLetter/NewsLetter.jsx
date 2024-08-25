import SubscribeBtn from "../SubscribeBtn/SubscribeBtn"

const NewsLetter = () => {

  return (
    <>
        <div className=" 2xl:container mx-auto">
            <div>
                <div className=" text-center bg-[#2f57ef] w-full h-full md:p-[100px] py-[70px] px-5">
                    <div className=" flex justify-center pb-10 flex-col items-center">
                        <span> 
                            <h1 className=" font-[euclid] font-medium text-[#ffffff] bg-[#a6afc349] p-2 px-5 rounded-full text-nowrap">GET LATEST HISTUDY UPDATES</h1>
                        </span>
                        <h1 className=" text-[44px] font-bold text-white py-[15px] font-[poppins]">Subscribe Our Newsletter</h1>
                        <p className=" xl:px-[285px] font-[euclid] text-[18px] text-white text-lg pb-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, delectus. Accusamus ea dicta culpa soluta nostrum magnam perferendis!</p>
                        <div className="">
                            <div>
                                <div className=" w-fit h-fit md:relative">
                                    <input className=" md:py-5 py-4 md:pr-[420px] rounded-lg pl-5 pr-[110px] mb-3 md:mb-0"  type="text"     placeholder=" Enter Your E-Email"/>
                                    <div className=" md:absolute right-2 md:right-3 md:top-[7px] top-[2.5px] ">
                                        <SubscribeBtn/>
                                    </div>
                                </div>
                            </div>
                            
                            <p className=" text-white font-medium text-[14px] py-5">No ads, No trails, No commitments</p>
                            <div>
                                <div className=" grid grid-cols-1 md:grid-cols-2 pt-5 gap-y-2">
                                    <div className="  md:border-r-[0.5px] md:border-red-50 md:border-r-slate-500 hover:-translate-y-2 transition">
                                            <h1 className=" text-[50px] font-[poppins] font-bold text-white">500+</h1>
                                            <span className=" font-[euclid] text-[20px] text-white font-bold">Successfully Trained</span>
                                            <p className=" text-white pt-2 font-medium">Learners & counting</p>
                                    </div>
                                    <div className=" hover:-translate-y-2 transition">
                                        <h1 className=" text-[50px] font-[poppins] font-bold text-white">500+</h1>
                                        <span className=" font-[euclid] text-[20px] text-white font-bold">Certification Students</span>
                                        <p className=" text-white pt-2 font-medium">Online Course</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter