import { StyleTweleApi } from "../../../API/StyleTweleApi"
import StyleTweleCard from "../StyleTweleCard.jsx/StyleTweleCard"
const StyleTwele = () => {
  return (
    <>
        <div className=" w-[90%] lg:w-[90%] mx-auto">
            <div>
                <h1 className=" text-start py-14 font-[lexend] font-bold text-[30px] text-[#192335]">How we <span className="text-[#1176F0] underline underline-offset-4">Work!</span> </h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 gap-5 md:gap-6">
                {
                    StyleTweleApi.map((e,index)=>{
                    return(
                        <>
                        <div key={index}>
                            <StyleTweleCard icon={e.icon}
                            title= {e.title}
                            num={e.num}
                            ctn={e.ctn}
                            />
                        </div>
                        </>
                    )
                    })
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default StyleTwele