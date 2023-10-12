import Clock from "./Clock";

function NavBar() {
  return (
    <div className="bg-red w-full">
      <div className="container flex items-center justify-between mx-auto max-w-6xl px-2 md:px-12 py-2 text-white ">
        <h1 className="font-bold text-sm md:text-lg capitalize">
          exclusive invite joe
        </h1>
        <img
          src="/public/assets/Grizzly Smaller (1) 2.png"
          alt=""
          className="scale-75 md:scale-100"
        />
        <div className="flex items-center justify-center space-x-2">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
