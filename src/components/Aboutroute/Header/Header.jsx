import { abouth, abouth440, abouth720 } from "../../../assets/image"

const Header = () => {
  return (
    <>
     <div className="2xl:container mx-auto mt-[110px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
          <img src={abouth440} alt=""  className="hidden md:block xl:hidden"/>
          <img src={abouth} alt="" className="hidden xl:block"/>
          <img src={abouth720} alt="" className=" md:hidden xl:hidden"/>
        </div>
      </div> 

    </>
  )
}

export default Header
