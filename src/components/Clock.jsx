import { useState } from "react";
import { BsFillClockFill } from "react-icons/bs";

function Clock() {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  const updateTime = () => {
    let currentDate = new Date();
    let d = currentDate.getDate();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();

    setDay(d);
    setHour(h);
    setMin(m);
    setSec(s);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="flex items-center justify-center space-x-1 text-lg font-bold">
      <BsFillClockFill />
      <h1 className="text-sm md:text-lg">{day}d:</h1>
      <h1 className="text-sm md:text-lg">{hour}h:</h1>
      <h1 className="text-sm md:text-lg">{min}m:</h1>
      <h1 className="text-sm md:text-lg">{sec}s</h1>
    </div>
  );
}

export default Clock;
