import CompanyCard from "../CompanyCard/CompanyCard"

const HeroSection = () => {
  return (
    <>
    {/* bg-[#7bb4fa] */}
      <div className=" 2xl:container mx-auto ">
        <div className=" lg:w-[90%] mx-auto w-[90%] mt-20">
          <div className=" flex flex-col items-center justify-center py-10">
            <div className=" relative">
              <h1 className=" text-[#1176F0] font-[LexendDeca] text-[16px] font-bold bg-[#cbd4fbdf] w-fit py-3 px-7 rounded-full mb-5 ">CODE GALLATA</h1>
              <div className=" absolute top-6 -left-5 h-[6px] w-8 rounded-full bg-[#1176F0]">

              </div>
            </div>
            <h1 className=" font-[LexendDeca] text-[42px] font-black text-center text-wrap">How Professional IT Services <br />
            Can Drive <span className=" text-[#1176F0]"> Success.</span></h1>
          </div>
          <div className=" pt-10">
            <CompanyCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection