import React from "react";
import { useGlobalContext } from "../context/AppContext";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function Tab() {
  const { currentTab } = useGlobalContext();

  return (
    <div className="w-4/5">
      <h2 className="text-xl sm:text-2xl font-semibold">{currentTab.title}</h2>
      <h3 className="my-2 inline-block bg-green-500 py-1 px-4 rounded">
        {currentTab.company}
      </h3>
      <p className="mb-4 text-lg sm:text-xl text-green-500">
        {currentTab.dates}
      </p>
      <div>
        {currentTab.duties.map((item, index) => {
          return (
            <p key={index} className="text-lg sm:text-xl mb-2 text-gray-300">
              {item}
            </p>
          );
        })}
      </div>
      <div className="text-center mt-14">
        <button className="inline-block bg-green-500 py-0.5 px-8 rounded text-lg sm:text-xl uppercase">
          More Info
        </button>
      </div>
    </div>
  );
}

export default Tab;
