import React from "react";
import Homecard from "./Homecard";

const homes = [
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
  {
    image: "https://ik.imagekit.io/sri05/service-1.png?updatedAt=1721654804318",
    name: "Graphic Design",
    content:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
  },
];

const Homebody = () => {
  return (
    <div className="2xl:container py-8">
      <div className="w-[90%] mx-auto grid grid-cols-1">
        <div className="">
          <h1 className="text-[18px] text-blue-600 text-center py-5">What we Provides?</h1>
          <h2 className="text-[42px]  font-semibold text-center py-5">
            Provide Interective IT Solution Business Services
          </h2>
          <div className="my-5 lg:block flex justify-center flex-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
            {homes.map((home, index) => (
              <Homecard
                key={index}
                home={home}
                className="text-[16px] text-gray-500 "
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
