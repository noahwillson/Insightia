import Carousel from "../components/Hero/Carousel";
import Recommended from "../components/Courses/Recommended";
import { IoIosArrowForward } from "react-icons/io";
import { GoDot, GoDotFill } from "react-icons/go";
import { useState } from "react";
import Popular from "../components/Courses/Popular";
import Trending from "../components/Courses/Trending";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <div className="flex lg:px-52 xl:px-52 px-12 py-11 justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="flex justify-between pb-4 items-center">
          <h1 className="text-2xl font-bold">Recommended for you</h1>
          <button className="items-center justify-between flex">
            View all
            <IoIosArrowForward className="ml-1" />
          </button>
        </div>
        <div className="">
          <Recommended />
        </div>
        <div className="flex justify-between py-14 items-center">
          <Carousel />
        </div>
        <div className="flex justify-center gap-4">
          <a href="#item1" className="cursor-pointer " onClick={handleActive}>
            {isActive ? (
              <GoDotFill className="w-6 h-6" />
            ) : (
              <GoDot className="w-6 h-6" />
            )}
          </a>
          <a
            href="#item2"
            className="cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <GoDot className="w-6 h-6" />
          </a>
          <a
            href="#item3"
            className="cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <GoDot className="w-6 h-6" />
          </a>
          <a
            href="#item4"
            className="cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <GoDot className="w-6 h-6" />
          </a>
        </div>
        <div className="flex justify-between pt-40 items-center">
          <h1 className="text-2xl font-bold">Popular courses</h1>
          <button className="items-center justify-between flex">
            View all
            <IoIosArrowForward className="ml-1" />
          </button>
        </div>
        <div className="py-5">
          <Popular />
        </div>
        <div className="flex justify-between pt-14 items-center">
          <h1 className="text-2xl font-bold">Trending courses</h1>
          <button className="items-center justify-between flex">
            View all
            <IoIosArrowForward className="ml-1" />
          </button>
        </div>
        <div className="py-5">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default Home;
