import React from "react";
import Homecard from "./Homecard";

const homes = [
  {
    image:
      "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-1.png?updatedAt=1724606035073",
    name: "3D Animation Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-2.png?updatedAt=1724606035246",
    name: "Web Development",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-3.png?updatedAt=1724606035083",
    name: "Digital Marketing",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-4.png?updatedAt=1724606035083",
    name: "VFX And Video Editing",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-5.png?updatedAt=1724606035083",
    name: "Video Editing",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/HoneyJoe/Eduvault/Eduvault/service-icon-6.png?updatedAt=1724606035083",
    name: "Google Top Ranking",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
];

const Homebody = () => {
  return (
    <div className="2xl:container py-8">
      <div className="w-[90%] mx-auto grid grid-cols-1">
        <div className="">
          <h1 className="text-[18px] text-blue-600 text-center py-5">
            What we Provides?
          </h1>
          <h2 className="text-[42px]  font-semibold text-center py-5">
            Provide Interective IT Solution Business Services
          </h2>
          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {homes.map((home, index) => (
                <Homecard
                  key={index}
                  home={home}
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebody;
