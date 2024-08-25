import React from "react";
import { Clock, FileText, Star, Users } from "lucide-react";
import { author_image } from "../../../assets/image";

const Header = () => {
  return (
    <>
      <div className="3xl:container mx-auto w-[100%] bg-[#041734]">
        <div className="w-[100%] mx-auto grid grid-cols-1 pt-40 pb-28 bg-[#041734]">
          <div className="w-[90%] mx-auto">
          <div className="flex flex-col gap-3 items-start">
            <button className="px-3 pt-2 pb-1 font-[LexendDeca] font-medium text-[14px] flex items-center text-white bg-[#04BC53] rounded-full leading-none">
            DESIGNING
            </button>
            <div>
              <p className="font-[LexendDeca] font-semibold text-[36px] text-white">
              MASTERING UIUX with FIGMA DESIGNING
              </p>
            </div>
            <div>
              <p className="font-[LexendDeca] text-base text-[#b2bdcd] font-normal">
              Design, prototype, and share seamlessly with Figma
              </p>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="">
                  <img
                    src={author_image}
                    alt="author image"
                    className="h-12 rounded-full border-2 border-white"
                  />
                </div>
                <div className="flex">
                  <p className="font-[LexendDeca] text-[#b2bdcd] text-base m-0">
                    Suganth PV
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <FileText className="text-white font-[LexendDeca] w-[18px]" />
                </div>
                <div>
                  <p className="font-[LexendDeca] text-[#b2bdcd] text-base m-0">25</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <Clock className="text-white font-[LexendDeca] w-[18px]" />
                </div>
                <div>
                  <p className="font-[LexendDeca] text-[#b2bdcd] text-base m-0">
                    25h 00m
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <Users className="text-white font-[LexendDeca] w-[18px]" />
                </div>
                <div className="font-[LexendDeca] text-[#b2bdcd] text-base">200</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1 items-center">
                  <Star className="fill-[#F8BC24] text-[#F8BC24] w-[15px] font-[Tutor]" />
                  <Star className="fill-[#F8BC24] text-[#F8BC24] w-[15px] font-[Tutor]" />
                  <Star className="fill-[#F8BC24] text-[#F8BC24] w-[15px] font-[Tutor]" />
                  <Star className="fill-[#F8BC24] text-[#F8BC24] w-[15px] font-[Tutor]" />
                  <Star className=" text-[#F8BC24] w-[15px] font-[Tutor]" />
                </div>
                <div>
                  <p className="text-[#b2bdcd] font-[LexendDeca] m-0">(4.29)</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Header;
