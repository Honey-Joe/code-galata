import { header, header440, header720 } from "../../../assets/image"

const Header = () => {
  return (
    <>
     <div className="2xl:container mx-auto mt-[100px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
          <img src={header720} alt=""  className="hidden md:block xl:hidden"/>
          <img src={header} alt="" className="hidden xl:block"/>
          <img src={header440} alt="" className=" md:hidden xl:hidden"/>
        </div>
        </div> 

    </>
  )
}

export default Header
