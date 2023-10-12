import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

const data = [
  {
    question: "Integer interdum orci nulla at varius",
    answer:
      "Sagittis cursus tempus arcu interdum lacinia enim elit adipiscing. Praesent mattis aliquam id leo id. Eu tempus tincidunt et iaculis. Odio morbi quis congue.",
  },
  {
    question: "Amet parturient morbi eget pellentesque amet.",
    answer:
      "Sagittis cursus tempus arcu interdum lacinia enim elit adipiscing. Praesent mattis aliquam id leo id. Eu tempus tincidunt et iaculis. Odio morbi quis congue.",
  },
  {
    question: "Dolor leo maecenas enim fermentum aliquam mi. Dictum.",
    answer:
      "Sagittis cursus tempus arcu interdum lacinia enim elit adipiscing. Praesent mattis aliquam id leo id. Eu tempus tincidunt et iaculis. Odio morbi quis congue.",
  },
  {
    question: "Tristique fringilla etiam commodo nunc tortor est.",
    answer:
      "Sagittis cursus tempus arcu interdum lacinia enim elit adipiscing. Praesent mattis aliquam id leo id. Eu tempus tincidunt et iaculis. Odio morbi quis congue.",
  },
  {
    question: "Integer interdum orci nulla at varius",
    answer:
      "Sagittis cursus tempus arcu interdum lacinia enim elit adipiscing. Praesent mattis aliquam id leo id. Eu tempus tincidunt et iaculis. Odio morbi quis congue.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(null);

  function handleClick(i) {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto  pt-24 pb-32 px-2  space-y-24 max-w-7xl overflow-hidden">
      <h1 className="text-4xl lg:text-6xl  font-bold text-center text-black">
        Frequently Asked <span className="text-orangeLight">Questions</span>
      </h1>
      <div className="flex flex-col items-center justify-center mx-auto px-6 max-w-7xl border-b border-gray-500">
        {data.map((curr, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className="flex flex-col justify-between py-6 space-y-12 w-full border-t border-1 border-gray-500 hover:text-orangeLight hover:scale-105 duration-300"
          >
            <div className="flex justify-between w-full">
              <h1 className="text-lg lg:text-2xl font-semiold">
                {curr.question}
              </h1>

              {selected === i ? (
                <AiOutlineMinus size={15} />
              ) : (
                <FaPlus size={15} />
              )}
            </div>
            {selected === i ? (
              <p className="text-sm lg:text-lg text-left max-w-2xl">
                {curr.answer}
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
