function Cards() {
  return (
    <div className="flex flex-col items-center justify-center space-y-20 pt-12 pb-12 lg:flex-row lg:space-x-8 lg:space-y-0">
      {/* card 1 */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 p-6 border-[1px] border-orangeLight max-w-[290px] rounded-xl hover:-translate-y-5 duration-300">
        <h1 className="text-2xl font-bold uppercase">Try for 30 days</h1>
        <p className="text-lmd text-gray-800 max-w-[200px]">
          And receive LUDICROUS LEADERSHIP as an additional gift
        </p>
        <h1 className="text-3xl font-bold ">
          <span className="text-orangeLight">$5</span> Activation
        </h1>
        <p className="text-lmd text-gray-800 max-w-[200px]">
          And receive LUDICROUS LEADERSHIP as an additional gift
        </p>
        <div
          className="py-2 px-6 text-md text-center font-bold rounded-full bg-gradient-to-r from-orangeLight to-orangeDark text-white uppercase hover:scale-105 hover:duration-300"
          style={{ whiteSpace: "nowrap" }}
        >
          join now
        </div>
      </div>
      {/* card 2 */}
      <div className="flex relative flex-col items-center justify-center -mt-44 text-center  space-y-4 p-6 py-12 border-[1px] border-dashed border-orangeLight max-w-[290px] rounded-xl hover:-translate-y-5 duration-300">
        <p className="text-lmd text-gray-800 max-w-[200px]">
          And receive LUDICROUS LEADERSHIP as an additional gift
        </p>
        <h1 className="text-3xl font-bold ">
          <span className="text-orangeLight">$5</span> Activation
        </h1>
        <p className="text-lmd text-gray-800 max-w-[200px]">
          And receive LUDICROUS LEADERSHIP as an additional gift
        </p>
        <div
          className="py-2 px-6 text-md text-center font-bold rounded-full bg-gradient-to-r from-orangeLight to-orangeDark text-white uppercase hover:scale-105 hover:duration-300"
          style={{ whiteSpace: "nowrap" }}
        >
          join now
        </div>
        <div className="absolute top-[-10%] bg-white py-1 px-2 border-[1px] border-orangeLight">
          <h1 className="text-2xl uppercase font-bold">most popular</h1>
        </div>
      </div>
      {/* card 3 */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 p-6 border-[1px] border-orangeLight max-w-[290px] rounded-xl hover:-translate-y-5 duration-300">
        <h1 className="text-2xl font-bold uppercase">Try for 30 days</h1>
        <p className="text-lmd text-gray-800 max-w-[200px]">
          And receive LUDICROUS LEADERSHIP as an additional gift
        </p>
        <h1 className="text-3xl font-bold ">
          <span className="text-orangeLight">$5</span> Activation
        </h1>
        <p className="text-lmd text-gray-800 max-w-[200px]">
          And receive LUDICROUS LEADERSHIP as an additional gift
        </p>
        <div
          className="py-2 px-6 text-md text-center font-bold rounded-full bg-gradient-to-r from-orangeLight to-orangeDark text-white uppercase hover:scale-105 hover:duration-300"
          style={{ whiteSpace: "nowrap" }}
        >
          join now
        </div>
      </div>
    </div>
  );
}

export default Cards;
