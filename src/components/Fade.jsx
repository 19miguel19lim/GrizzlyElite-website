import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Fade() {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    function hanldeScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShow(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", hanldeScroll, false);
  }, [lastYPos]);
  return (
    <div className="bg-black">
      <motion.div
        className=" bg-black"
        animate={{ opacity: shouldShow ? 1 : 0 }}
        initial={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center max-w-4xl mx-auto justify-center  py-60 px-2 space-y-24">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-white text-center px-4">
            You're about to embark on a exclusive, eventually the world class
            community.
          </h1>
          <div className="py-4 px-12 text-lg font-bold rounded-full bg-red text-white uppercase hover:scale-105 hover:duration-300">
            yes! start now
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Fade;
