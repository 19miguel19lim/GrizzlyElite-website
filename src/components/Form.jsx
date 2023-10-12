import Cards from "./Cards";
import Payment from "./Payment";

function Form() {
  return (
    <div className="overflow-hidden">
      <div className=" relative mx-auto  flex flex-col items-center justify-center pt-24 pb-32  space-y-6 lg:space-y-24 max-w-7xl">
        <h1 className="text-4xl lg:text-6xl text-center font-bold text-black">
          Let's Begin Your <span className="text-orangeLight">Training</span>
        </h1>
        <div className="flex flex-col items-center justify-center space-y-12 py-12  mx-auto lg:flex-row lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col items-start justify-center space-y-2  ">
            <input
              type="text"
              placeholder="Name*"
              className="border-b-[1px]  border-gray-600  py-2 pl-4 pr-16 text-2xl lg:text-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-center space-y-2  ">
            <input
              type="text"
              placeholder="Email*"
              className="border-b-[1px]  border-gray-600  py-2 pl-4 pr-16 text-2xl lg:text-xl"
            />
          </div>
          <div
            className="py-4 px-12  text-md text-center font-bold rounded-full bg-gradient-to-r from-orangeLight to-orangeDark text-white uppercase hover:scale-105 hover:duration-300"
            style={{ whiteSpace: "nowrap" }}
          >
            join now
          </div>
        </div>
        <div className="absolute -top-20 right-0 lg:top-44 lg:right-2">
          <img src="/public/assets/Polygon 3.png" alt="" />
        </div>
        <Cards />
        <Payment />
      </div>
    </div>
  );
}

export default Form;
