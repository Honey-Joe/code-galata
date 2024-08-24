import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CountCard = ({ data }) => {
  const [animatedCounts, setAnimatedCounts] = useState(data.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 50;
    const totalSteps = duration / intervalTime;

    const increments = data.map((item) => Math.ceil(item.count / totalSteps));

    const intervalId = setInterval(() => {
      setAnimatedCounts((prevCounts) => {
        return prevCounts.map((count, index) => {
          if (count < data[index].count) {
            return Math.min(count + increments[index], data[index].count);
          }
          return count;
        });
      });
    }, intervalTime);

    setTimeout(() => clearInterval(intervalId), duration);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
      {data.map((item, index) => (
        <div
          key={item.label + index}
          className="shadow-lg rounded-xl w-full h-[230px] flex flex-col justify-center items-center p-4 bg-gray-50"
        >
          <img
            src={item.imageUrl}
            alt={item.label}
            className=" mb-4"
          />
          <div className="flex flex-col items-center">
            <p className="text-[30px] text-black font-semibold ">
              {animatedCounts[index]}
            </p>
            <p className="text-[16px]  text-gray-600 font-normal">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

CountCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CountCard;
