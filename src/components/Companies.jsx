import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Company from "./Company";

function Companies() {
  const { tabs } = useGlobalContext();
  return (
    <div className="w-1/5 flex flex-col items-center">
      {tabs.map((item, index) => {
        return <Company key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default Companies;
