import Stars from "./Stars";

function HeroSection() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-between space-y-12   max-w-6xl mx-auto py-24 px-6 lg:flex-row lg:space-y-0 lg:space-x-12">
          <img
            src="/public/assets/05-Joaquin-Revllo-22_0039-Full 1.png "
            alt=""
            className=""
          />
          <div className="flex flex-col items-center justify-center mx-auto py-12 px-2 space-y-6 text-white">
            <h1 className="text-3xl lg:text-5xl font-bold">Congralutations!</h1>
            <h1 className="text-lg lg:text-2xl text-center font-semibold">
              You've been accepted to Grizzly Elite
            </h1>
            <h1 className="text-4xl lg:text-7xl font-bold border-b-4 lg:border-b-8 py-4  border-orange">
              March 1st
            </h1>
            <div className="py-4 px-12 text-sm lg:text-lg font-bold rounded-full bg-gradient-to-r from-orangeLight to-orangeDark text-white uppercase hover:scale-105 hover:duration-300">
              yes! start now
            </div>
          </div>
        </div>
      </div>
      <Stars />
    </div>
  );
}

export default HeroSection;
