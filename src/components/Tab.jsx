import React from "react";
import { useGlobalContext } from "../context/AppContext";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function Tab() {
  const { currentTab } = useGlobalContext();

  return (
    <div>
      <h2>{currentTab.title}</h2>
      <h3>{currentTab.company}</h3>
      <p>{currentTab.dates}</p>
      <div>
        {currentTab.duties.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <button>More Info</button>
    </div>
  );
}

export default Tab;
