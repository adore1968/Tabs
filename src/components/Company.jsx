import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Company({ item, index }) {
  const { setIndex } = useGlobalContext();
  return (
    <>
      <button
        onClick={() => setIndex(index)}
        className="text-xl sm:text-2xl mb-3 hover:text-green-500 transition-colors"
      >
        {item.company}
      </button>
    </>
  );
}

export default Company;
