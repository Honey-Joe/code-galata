import { useState } from "react"
import { Plus, Minus } from "lucide-react"
const FaqAccodion = ({title , content}) => {
    const [accodion, setAccodion] = useState(false)
  return (
    <>
        <div className={ `mt-4 bg-[#FFFFFF] shadow-lg ${accodion?'rounded-md ' : ' rounded-t-md'}`}> 
            <button onClick={()=> setAccodion(!accodion)} className={`flex items-center overflow-hidden justify-between w-full p-4 rounded-t-md focus:outline-none focus:ring focus:ring-[#BAD3F6] ${accodion? 'shadow-blue-800 rounded-md focus:ring-0' : ''}` }>
                <span className={`font-[manrope-b] md:text-nowrap text-start  ${accodion? 'text-[#1176F0]': " text-black"}`}>{title}</span>
                {accodion ? <Minus className={`transform origin-center transition  duration-200 ease-out ${accodion ? "rotate-180 stroke-[#1176F0]" : ""}`} /> : <Plus className={`transform origin-center  transition duration-200 ease-out ${accodion && "!rotate-180"}`}/> }
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accodion? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className=" overflow-hidden px-2">
                     <p className=" text-[15px] text-[#6c6f70] py-5 leading-[25px] font-[manrope] px-3">{content}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FaqAccodion