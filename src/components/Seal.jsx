import Reviews from "./Reviews";

function Seal() {
  return (
    <div className=" bg-black">
      <div className="flex flex-col items-center justify-center text-center overflowX-hidden text-white space-y-6 py-24">
        <img src="/public/assets/seal.png" alt="" className="-mt-64" />
        <h1 className="text-3xl lg:text-6xl font-bold capitalize max-w-6xl px-4">
          why don't other educational experts{" "}
          <span className="text-orangeLight">guarantee</span> success? well,{" "}
          <span className="text-orangeLight">we can</span>. and we will.
        </h1>
        <div className="container mx-auto ">
          <div className="flex flex-col items-center justify-between space-y-12 max-w-6xl mx-auto py-6  px-6 lg:flex-row lg:space-x-12 lg:py-24">
            <div className="flex flex-col items-start  justify-center text-left py-12 space-y-6 text-white">
              <h1 className="text-lg lg:text-xl font-semibold">
                I (Joaquin), personally guarantee your success.
              </h1>
              <h1 className="text-lg lg:text-xl font-semibold">
                Grizzly guarantees to 10 fold your goals, motivation, and
                productivity. But talk is cheap. So, to back this up, I’m
                offering two separate guarantees.{" "}
              </h1>
            </div>
            <img src="/public/assets/seal-img.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-12 px-4 max-w-7xl">
          {/* item 1 */}
          <div className="flex flex-col items-start justify-between lg:flex-row lg:space-x-2">
            <img src="/public/assets/seal-icon.png" alt="" className="h-24" />
            {/* content */}
            <div className="flex flex-col items-start justify-center text-left  space-y-4">
              <h1 className="text-4xl font-bold t">
                30-Day Club a Grizzly Guarantee
              </h1>
              <p className="text-md lg:text-xl  text-gray-400 ">
                If after the first 30 days of training you don’t see at least a
                5x return on your investment (if your productivity has not
                increased by AT LEAST 500%) you can ‘club the grizzly’—i.e.,
                withdraw from the training, return your Grizzly Elite training
                books, and get 100% of your money back.
              </p>
              <p className="text-md lg:text-xl  text-gray-400 ">
                I’m making such a bold guarantee because I’m extremely confident
                that what Grizzly Elite has to offer is the real deal, and that
                you’ll wholeheartedly agree
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-start justify-between lg:flex-row lg:space-x-2">
            <img src="/public/assets/seal-icon.png" alt="" className="h-24" />
            {/* content */}
            <div className="flex flex-col items-start justify-center text-left space-y-4">
              <h1 className="text-4xl font-bold t">
                6-Month 10X Grizzly Domination Guarantee
              </h1>
              <p className="text-md lg:text-xl  text-gray-400 ">
                Based on our track record and utterly unfair resources, we’re so
                confident of your success that if you are, in the worst case,
                not on track to achieve 10x your wow factor (with less stress)
                and are not getting straight 4.0 grades across the board after
                six months of working with us (given that you’ve applied each
                step/strategy and followed all the content), we’ll give you free
                1:1 training until you’re on track to achieve your goals (we
                benefit by getting a spectacular turnaround new Grizzly success
                story).
              </p>
              <p className="text-md lg:text-xl  text-gray-400 ">
                No questions asked.
              </p>
              <p className="text-md lg:text-xl  text-gray-400 ">
                We challenge you to test this guarantee. Take advantage of our
                insane offer! When you do, you’ll realize that it’s impossible
                to avoid success when applying our strategies.
              </p>
            </div>
          </div>
          <div className="py-4 px-12 text-lg font-bold rounded-full bg-gradient-to-r from-orangeLight to-orangeDark text-white uppercase hover:scale-105 hover:duration-300">
            Apply Now
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
}

export default Seal;
