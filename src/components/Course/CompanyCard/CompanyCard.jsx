import { Plus , Blocks,Boxes,BadgeIndianRupee,TabletSmartphone} from "lucide-react"

const CompanyCard = () => {
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4 ">
      <div className="mb-10 z-10 group rounded-2xl bg-white shadow-2xl" id="cardbg">
        <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg">
          <div className=" flex justify-center">
            <Boxes className=" group-hover:stroke-white stroke-[#1176F0] h-10 w-[60px]"/>
          </div>
          <h2 className=" font-[LexendDeca] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">Web Development</h2>
          <p className=" font-[LexendDeca] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">Marketing repurpose success in professions whereas in services sapien maximus design.</p>
        </div>
      </div>
      <div className="mb-10 z-10 group rounded-xl bg-white shadow-2xl" id="cardbg">
        <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg">
          <div className=" flex justify-center">
            <Blocks className=" group-hover:stroke-white stroke-[#1176F0] h-10 w-[60px]"/>
          </div>
          <h2 className=" font-[LexendDeca] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">IT Management</h2>
          <p className=" font-[LexendDeca] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">Marketing repurpose success in professions whereas in services sapien maximus design.</p>
        </div>
      </div>
      <div className="mb-10 z-10 group rounded-2xl bg-white shadow-2xl" id="cardbg">
        <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg">
          <div className=" flex justify-center">
            <BadgeIndianRupee className=" group-hover:stroke-white stroke-[#1176F0] h-10 w-[60px]"/>
          </div>
          <h2 className=" font-[LexendDeca] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">Digital Marketing</h2>
          <p className=" font-[LexendDeca] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">Marketing repurpose success in professions whereas in services sapien maximus design.</p>
        </div>
      </div>
      <div className="mb-10 z-10 group rounded-2xl bg-white shadow-2xl" id="cardbg">
        <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg">
          <div className=" flex justify-center">
            <TabletSmartphone className=" group-hover:stroke-white stroke-[#1176F0] h-10 w-[60px]"/>
          </div>
          <h2 className=" font-[LexendDeca] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">App Development</h2>
          <p className=" font-[LexendDeca] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">Marketing repurpose success in professions whereas in services sapien maximus design.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompanyCard