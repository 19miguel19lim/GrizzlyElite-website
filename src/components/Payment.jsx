import { AiFillCreditCard } from "react-icons/ai";

function Payment() {
  return (
    <div className="flex flex-col relative overflow-hidden mx-auto items-center justify-center  pt-2 px-2 pb-32 space-y-12 max-w-6xl">
      <h1 className="text-5xl lg:text-6xl font-bold mx-auto text-black">
        Payment
      </h1>
      <h1 className="text-xl font-semibold text-black ">Payment Details</h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="flex flex-col items-start justify-center pr-24 pl-2 py-4 border-[3px] border-gray-200 rounded-lg hover:border-orangeDark">
          <AiFillCreditCard size={25} />
          <p className="font-semibold text-lg">card</p>
        </div>
        <div className="flex flex-col items-start justify-center pr-24 pl-2 py-4 border-[3px] border-gray-200 rounded-lg hover:border-orangeDark">
          <img src="assets/iDeal.png" alt="" />
          <p className="font-semibold text-lg">iDeal</p>
        </div>
        <div className="flex flex-col items-start justify-center pr-24 pl-2 py-4 border-[3px] border-gray-200 rounded-lg hover:border-orangeDark">
          <img src="assets/klarna.png" alt="" />
          <p className="font-semibold text-lg">Klarna</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-6 border-[3px] border-gray-200 rounded-lg hover:border-orangeDark">
          <div className="h-3 w-3 border 2 bg-gray-400 rounded-full"></div>
          <div className="h-3 w-3 border 2 bg-gray-400 rounded-full"></div>
          <div className="h-3 w-3 border 2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-2">
        <p className="text-xl font-semibold text-gray-600 ">Card number</p>
        <input
          type="text"
          placeholder="4512 4584 1423 4785"
          className="border-[3px] border-gray-200 py-4 rounded-lg pl-4 pr-24 lg:pr-[30rem] hover:border-orangeDark"
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0">
        <div className="flex flex-col items-start justify-center space-y-2 ">
          <p className="text-xl font-semibold text-gray-600 ">
            Expiration Date
          </p>
          <input
            type="text"
            placeholder="MM / YY"
            className="border-[3px] border-gray-200 py-4 rounded-lg pl-4  pr-24 lg:pr-32 hover:border-orangeDark"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-2 lg:w-[1/2]">
          <p className="text-xl font-semibold text-gray-600 ">Security Code</p>
          <input
            type="text"
            placeholder="CVV"
            className="border-[3px] border-gray-200 py-4 rounded-lg pl-4  pr-24 lg:pr-32 hover:border-orangeDark"
          />
        </div>
      </div>
      <div
        className="py-4 px-12 ml-12  text-md text-center font-bold rounded-full bg-gradient-to-r from-orangeLight to-orangeDark text-white uppercase hover:scale-105 hover:duration-300"
        style={{ whiteSpace: "nowrap" }}
      >
        join now
      </div>
    </div>
  );
}

export default Payment;
