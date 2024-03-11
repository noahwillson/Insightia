import Recommended from "../components/Hero/Recommended";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="flex lg:px-52 py-11 justify-center items-center">
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
      </div>
    </div>
  );
};

export default Home;
