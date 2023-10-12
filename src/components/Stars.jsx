import { AiFillStar } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";

function Stars() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="hidden  items-center justify-center space-x-2 lg:flex">
        <AiFillStar size={60} fill="#F47B20" />
        <AiFillStar size={60} fill="#F47B20" />
        <AiFillStar size={60} fill="#F47B20" />
        <AiFillStar size={60} fill="#F47B20" />
        <AiFillStar size={60} fill="#F47B20" />
      </div>
      <div className="flex items-center justify-center space-x-2 lg:hidden">
        <AiFillStar size={40} fill="#F47B20" />
        <AiFillStar size={40} fill="#F47B20" />
        <AiFillStar size={40} fill="#F47B20" />
        <AiFillStar size={40} fill="#F47B20" />
        <AiFillStar size={40} fill="#F47B20" />
      </div>
      <div className="flex items-center justify-center  space-x-2">
        <h1 className="flex items-center text-4xl lg:text-6xl text-orangeLight font-bold">
          200{" "}
          <span>
            <HiPlus size={30} />
          </span>
        </h1>

        <p className="text-white text-md lg:text-lg font-bold">Reviews</p>
      </div>
    </div>
  );
}

export default Stars;
