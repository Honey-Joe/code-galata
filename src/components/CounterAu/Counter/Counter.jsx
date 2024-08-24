
import CountCard from '../CountCard/CountCard';
const data = [
    {
      imageUrl:
        "https://ik.imagekit.io/sri05/icon-1.png?updatedAt=1724485480596&updatedAt=1724485480596",
      count: 3215,
      label: "Students Enrolled",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/sri05/icon-1.png?updatedAt=1724485480596&updatedAt=1724485480596",
      count: 120,
      label: "Top Class Courses",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/sri05/icon-1.png?updatedAt=1724485480596&updatedAt=1724485480596",
      count: 50,
      label: "World Countries",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/sri05/icon-1.png?updatedAt=1724485480596&updatedAt=1724485480596",
      count: 70,
      label: "Workshops Conducted",
    },
  ];

const Counter = () => {
    return (
        <div className="2xl:container px-4 lg:pt-36 pt-20 pb-8 mx-auto">
          <div className="w-[90%] lg:w-[90%] mx-auto">
            <div className="">
              <div className="p-[10px] flex flex-col justify-center items-center">
                <p className="bg-blue-200 mt-5 font-[poppins] rounded-lg text-blue-700 text-[14px] md:text-[16px]  py-[7px] px-[15px] mb-[15px]">
                  Worldwide Our Achievement
                </p>
                <p className="text-[29px] lg:text-[36px] font-semibold font-[poppins] text-[#082A5E] text-center">
                  Grow Your <span className="text-blue-600">Skills</span> To Advance
                  Your Career Path
                </p>
              </div>
              <div className="mt-3">
                <CountCard data={data} />
              </div>
            </div>
          </div>
        </div>
    );
}

export default Counter