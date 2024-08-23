import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "./Form";

export function Card({ source, text, subtext }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };


  return (
    <div className="relative h-[400px] w-[300px] rounded-2xl">
      <img
        src={source}
        alt="Img"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{text}</h1>
        <p className="mt-2 text-sm text-gray-300">{subtext}</p>
        <button
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
          onClick={handleClick}
        >
          <Link to={"/test"}>Proceed</Link>&rarr;
        </button>

        {showForm &&
          (text === "IPC Section Analyser" ? (
            <Form
              heading="IPC Section Analyser"
              number="Fir Number"
              date="Charge Sheet Date"
              description=""
              text="Evidence"
            />
          ) : text === "Judgement Analyser" ? (
            <Form
              heading="Judgement Analyser"
              number="Case Number"
              date="Judgment Date"
              description="Judgement text"
              text="Legal Sections Applied"
            />
          ) : null)}
      </div>
    </div>
  );
}

Card.propTypes = {
  source: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};
