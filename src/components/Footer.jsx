import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-black w-full border-t-8 border-orangeLight">
      <div className="container flex flex-col items-center justify-between mx-auto max-w-6xl space-y-6 py-6 px-2 lg:px-12 lg:flex-row lg:space-y-0">
        <div className="flex items-center justify-center space-x-4 text-orangeLight ">
          <BiLogoFacebook className="hover:scale-125 duration-300" size={20} />
          <BiLogoTwitter className="hover:scale-125 duration-300" size={20} />
          <BiLogoInstagramAlt
            className="hover:scale-125 duration-300"
            size={20}
          />
          <BiLogoLinkedin className="hover:scale-125 duration-300" size={20} />
        </div>
        <p className="text-xs lg:text-md font-bold text-gray-500">
          &copy; 2022 - Grizzly | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
