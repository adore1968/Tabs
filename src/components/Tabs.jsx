import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Companies from "./Companies";
import Tab from "./Tab";
import Loading from "./Loading";

function Tabs() {
  const { loading, currentTab } = useGlobalContext();

  if (loading || !currentTab) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-center text-white text-2xl sm:text-4xl font-bold">
        Experience
      </h1>
      <div className="mt-14 flex text-white">
        <Companies />
        <Tab />
      </div>
    </div>
  );
}

export default Tabs;
