import ContactForm from "../ContactForm/ContactForm"
import ContactCard from "../ContactCard/ContactCard"
import Footer from "../Footer/Footer"
import Map from "../Map/Map"

const Contact = () => {
  return (
    <>
    {/* bg-[#f1e4fd] */}
        <div className=" 2xl:container mx-auto bg-white">
            <div className="lg:w-[90%] xl:w-[90%] w-[90%] mx-auto">
                <div className=" text-center pt-28 flex justify-center flex-col items-center">   
                    <h2 className="  text-center font-[LexendDeca] font-medium text-[#2F57EF] bg-[#E4E9FD] py-2 px-5  rounded-full w-fit">CONTACT US</h2>
                    <h1 className=" text-[44px] font-bold font-[LexendDeca] pt-5 leading-tight">Histudy Course Contact <br />
                    can join with us.</h1>
                </div>  
                <ContactCard/>
                <ContactForm/>
            </div> 
            <div>
                <Map/>
            </div>
        </div>
    </>
  )
}

export default Contact