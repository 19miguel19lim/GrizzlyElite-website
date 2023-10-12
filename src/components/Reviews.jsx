import Stars from "./Stars";

function Reviews() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="container flex flex-col max-w-4xl items-center justify-center mx-auto py-24 space-y-4 ">
        <div className="flex flex-col relative items-center justify-center space-y-12  py-6 lg:flex-row lg:space-y-0 lg:space-x-2">
          {/* Card 1 */}
          <div className="flex flex-col items-start justify-between space-y-6 text-white w-[80%] lg:w-1/3 lg:flex-row lg:space-y-0 lg:space-x-2 ">
            {/* img */}
            <img src="/public/assets/Ellipse 9.png" alt="" />
            {/* content */}
            <div className="flex flex-col justify-center space-y-2 text-left">
              <h1 className="text-xl font-bold">Wade Warren</h1>
              <p className="text-sm  text-gray-400">
                @Wade Warren . 2 days ago
              </p>
              <p>
                Sociis amet etiam elementum amet enim ac tristique a. Nullam
                tempus adipiscing enim, mauris lacus tincidunt eget elit. Id
                ultrices.
              </p>
              <img
                src="/public/assets/Group 35413.png"
                alt=""
                className="h-4 w-20"
              />
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col items-start justify-between space-y-6 text-white w-[80%] lg:w-1/3 lg:flex-row lg:space-y-0 lg:space-x-2 ">
            {/* img */}
            <img src="/public/assets/Ellipse 9.png" alt="" />
            {/* content */}
            <div className="flex flex-col justify-center space-y-2 text-left">
              <h1 className="text-xl font-bold">Wade Warren</h1>
              <p className="text-sm  text-gray-400">
                @Wade Warren . 2 days ago
              </p>
              <p>
                Sociis amet etiam elementum amet enim ac tristique a. Nullam
                tempus adipiscing enim, mauris lacus tincidunt eget elit. Id
                ultrices.
              </p>
              <img
                src="/public/assets/Group 35413.png"
                alt=""
                className="h-4 w-20"
              />
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col items-start justify-between space-y-6 text-white w-[80%] lg:w-1/3 lg:flex-row lg:space-y-0 lg:space-x-2 ">
            {/* img */}
            <img src="/public/assets/Ellipse 9.png" alt="" />
            {/* content */}
            <div className="flex flex-col justify-center space-y-2 text-left">
              <h1 className="text-xl font-bold">Wade Warren</h1>
              <p className="text-sm  text-gray-400">
                @Wade Warren . 2 days ago
              </p>
              <p>
                Sociis amet etiam elementum amet enim ac tristique a. Nullam
                tempus adipiscing enim, mauris lacus tincidunt eget elit. Id
                ultrices.
              </p>
              <img
                src="/public/assets/Group 35413.png"
                alt=""
                className="h-4 w-20"
              />
            </div>
          </div>

          <div className="hidden lg:block absolute top-[50%] left-[-10%]">
            <img
              src="/public/assets/left-arrow.png"
              alt=""
              className="hover:scale-110 duration-300"
            />
          </div>
          <div className="hidden lg:block absolute top-[50%] right-[-10%]">
            <img
              src="/public/assets/right-arrow.png"
              alt=""
              className="hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
