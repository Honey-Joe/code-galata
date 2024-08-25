import { homeri1, homeri2 } from "../../../API/ImageApi"
import { img1 } from "../../../assets/image"
import { NotepadText,BookMarked, Star, Users } from "lucide-react"

const HeaderCard = () => {
  return (
    <>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center relative lg:gap-20 xl:gap-14">
            <div className=" p-6 bg-[#F9F8FF] rounded-md w-fit my-5 lg:my-28 md:my-10 group">
                <div className=" inline-block overflow-hidden relative  ">
                    <img src={homeri1} alt="Image" className="group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <BookMarked className=" w-8 h-8 absolute top-4 right-4 stroke-2 stroke-white group-hover:hover:bg-[#1176F0] transition-colors duration-300 bg-[#504f5134] p-2 rounded-full" />
                </div>
                <p className=" bg-[#3c8ef31a] w-fit px-2 rounded-sm text-[#1578F0] font-[poppins] my-4">Development</p>
                <div className=" flex items-center gap-4">
                    <div className=" flex items-center gap-2">
                        <NotepadText className=" w-4 stroke-1 stroke-[#6f7072]"/>
                        <p className=" text-[#5c5c5e] font-[hindu]">4 Lessons</p>
                    </div>
                    <div className=" flex items-center gap-2">
                        <Users className=" w-4 stroke-1 stroke-[#57585a]"/>
                        <p className=" text-[#5c5c5e] font-[hindu]">1 Student</p>
                    </div>
                </div>
                <h1 className=" text-wrap font-[hindu] font-bold text-xl pt-4 hover:text-[#1176F0]"> How to Market Yourself as <br /> Coach or Consultant Market</h1>
                <p className=" text-sm text-slate-500 font-medium py-5">Suganth</p>
                <div className=" flex items-center gap-5 justify-between ">
                    <div className=" flex items-cente r">
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C 
                        ] w-5"/>
                    </div>
                    <h2 className=" font-[hindu] font-bold text-lg ">$44.00</h2>
                </div>
            </div>

            <div className=" p-6 bg-[#F9F8FF] rounded-md w-fit md:my-28 group md:absolute top-24 right-0">
                <div className=" inline-block overflow-hidden relative ">
                    <img src={homeri2} alt="Image" className="group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <BookMarked className=" w-8 h-8 absolute top-4 right-4 stroke-2 stroke-white group-hover:hover:bg-[#1176F0] transition-colors duration-300 bg-[#504f5134] p-2 rounded-full" />
                </div>
                <p className=" bg-[#3c8ef31a] w-fit px-2 rounded-sm text-[#1578F0] font-[poppins] my-4">Accounting</p>
                <div className=" flex items-center gap-4">
                    <div className=" flex items-center gap-2">
                        <NotepadText className=" w-4 stroke-1 stroke-[#6f7072]"/>
                        <p className=" text-[#5c5c5e] font-[hindu]">3 Lessons</p>
                    </div>
                    <div className=" flex items-center gap-2">
                        <Users className=" w-4 stroke-1 stroke-[#57585a]"/>
                        <p className=" text-[#5c5c5e] font-[hindu]">1 Student</p>
                    </div>
                </div>
                <h1 className=" text-wrap font-[hindu] font-bold text-xl pt-4 hover:text-[#1176F0]"> How to Market Yourself as <br /> Coach or Consultant Market</h1>
                <p className=" text-sm text-slate-500 font-medium py-5">Suganth</p>
                <div className=" flex items-center gap-5 justify-between ">
                    <div className=" flex items-cente r">
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                        <Star className=" stroke-[#FF6D1C] w-5"/>
                    </div>
                    <h2 className=" font-[hindu] font-bold text-lg ">$55.00</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderCard