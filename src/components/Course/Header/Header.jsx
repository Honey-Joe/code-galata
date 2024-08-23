import { ChevronDown,Search,ShoppingCart,User,Grid2X2 ,MoveRight} from "lucide-react";
import { logowhite } from "../../assets/Api/ImageApi";

const Header = () => {
  return (
    <>
        <div className="2xl:container bg-black mx-auto">
            <div className="w-[90%] mx-auto">
                <div className=" text-white grid grid-cols-2 gap-5 lg:grid-cols-4 py-5 items-center justify-between">
                    <div className=" flex gap-3 items-center text-white justify-start ">
                        <img src={logowhite} alt="logo"/>
                    </div>
                    <div className="hidden lg:flex justify-center col-span-2">
                        <ul className="flex items-center md:gap-5 lg:gap-7 justify-center">
                            <li>
                                <div className="flex gap-1 items-center">
                                <p className="font-[firesans-r] font-medium text-base cursor-pointer hover:text-[#ff3c00] flex gap-1 text-[16px] items-center text-white">Home <ChevronDown className=" h-5"/></p> 
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                <p className="font-[firesans-r] font-medium text-base text-white cursor-pointer hover:text-[#ff3c00] flex gap-1 text-[16px] items-center">Company <ChevronDown className=" h-5"/></p> 
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                <p className="font-[firesans-r] font-medium text-base text-white cursor-pointer hover:text-[#ff3c00] flex gap-1 text-[16px]">Portfolio</p> 
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                <p className="font-[firesans-r] font-medium text-base text-white cursor-pointer hover:text-[#ff3c00] flex gap-1 text-[16px] items-center">Service <ChevronDown className=" h-5"/></p> 
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                <p className="font-[firesans-r] font-medium text-base text-white cursor-pointer hover:text-[#ff3c00] flex gap-1 text-[16px] items-center">Blog <ChevronDown className=" h-5"/></p> 
                                </div>
                            </li>
                            <li>
                                <p className="font-[firesans-r] font-medium text-base text-white cursor-pointer hover:text-[#ff3c00] flex gap-1 text-[16px] items-center">Contact</p> 
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-end ">
                        <button className=" flex gap-1 text-[#ff3c00] font-medium">
                            GET A QUOTE NOW <MoveRight /> 
                        </button>
                    </div>
                </div>  
            </div>
        </div>
    </>
  )
}

export default Header