import Accordion from "./Accordion";

function Challenge() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto  pt-24 pb-32  space-y-24 max-w-7xl">
      <h1 className="text-4xl lg:text-6xl font-bold text-center px-4 text-black">
        30 Day Access To the OFA Challenge{" "}
        <span className="text-orangeLight">Facebook Group</span>
      </h1>

      <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-24 lg:space-y-0">
        <div className="relative">
          <img src="/public/assets/fb-img.png" alt="" />
          <div className="absolute top-[35%] left-[40%] ">
            <img
              src="/public/assets/red-play-button.png"
              alt=""
              className="hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-6 px-2">
          <p className="max-w-md text-left ">
            Tincidunt lectus amet scelerisque sollicitudin duis. Metus vel
            semper risus volutpat dolor turpis. Amet tortor arcu duis nec
            scelerisque enim vitae vitae. Porttitor risus enim malesuada.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <img src="/public/assets/triange-icon.png" alt="" />
            <p className="max-w-md text-left ">
              A pellentesque ipsum mi a volutpat felis. Libero ultricies
              fringilla ut leo risus non morbi. Ridiculus pretium magna.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <img src="/public/assets/triange-icon.png" alt="" />
            <p className="max-w-md text-left ">
              A pellentesque ipsum mi a volutpat felis. Libero ultricies
              fringilla ut leo risus non morbi. Ridiculus pretium magna.
            </p>
          </div>
          <p className="max-w-md text-left ">
            Tincidunt lectus amet scelerisque sollicitudin duis. Metus vel
            semper risus volutpat dolor turpis. Amet tortor arcu duis nec
            scelerisque enim vitae vitae. Porttitor risus enim malesuada.
          </p>
        </div>
      </div>
      <Accordion />
    </div>
  );
}

export default Challenge;
