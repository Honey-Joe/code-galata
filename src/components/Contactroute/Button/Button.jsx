import {ArrowRight} from "lucide-react"

const Button = () => {
  return (
    <>
        <div className=" bg-gradient-to-r from-[#2f57ef] to-[#5BA5FF] hover:from-[#5BA5FF] hover:to-[#2f57ef] rounded-lg">
            <div className=" group  flex items-center justify-center px-5 py-3 text-white rounded-lg hover:translate-x-3 transition  hover:text-[#fff] ">
                <div className=" flex items-center justify-center">
                    <ArrowRight className=" h-5 mx-1 hidden group-hover:block"/> 
                    <button className=" flex items-center font-[euclid] space-x-1 text-[16px] ">GET IT NOW</button>
                    <ArrowRight className=" h-5 group-hover:hidden"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Button