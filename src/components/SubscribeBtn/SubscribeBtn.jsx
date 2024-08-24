import {ArrowRight} from "lucide-react"

const SubscribeBtn = () => {
  return (
    <>
        <div className=" bg-gradient-to-r from-[#2f57ef] to-pink-600 hover:from-white hover:to-white rounded-lg">
            <div className=" group  flex items-center justify-center px-5 py-3 text-white rounded-lg hover:translate-x-3 transition  hover:text-[#2f57ef] ">
                <div className=" flex items-center justify-center">
                    <ArrowRight className=" h-5 mx-1 hidden group-hover:block"/> 
                    <button className=" flex items-center font-[euclid] space-x-1 text-[18px] ">Subscribe</button>
                    <ArrowRight className=" h-5 group-hover:hidden"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SubscribeBtn