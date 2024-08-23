import { certifcate } from "../../../assets/image";

const Navcertificate = () => {
  return (
    <>
      <div className="3xl:container">
        <div
          className=" py-6 px-8 gap-5 rounded-xl "
          id="certi"
        >
          <div className=" grid grid-cols-1 lg:grid-cols-2 rounded-xl py-4 px-4">
            <div className="py-3 px-3 flex flex-col gap-2 ">
              <p className="font-[LexendDeca] font-bold text-[20px]">
                Earn a certificate
              </p>
              <hr />
              <p className="font-[Hind] text-[16px] text-black ">
                Add this certificate to your resume to demonstrate your skills &
                increase your chances of getting noticed.
              </p>
            </div>
            <div className=" flex justify-center">
              <img src={certifcate} alt="certificate" className="w-[80%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navcertificate;
