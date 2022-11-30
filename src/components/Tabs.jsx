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
      <h1>Experience</h1>
      <div>
        <Companies />
        <Tab />
      </div>
    </div>
  );
}

export default Tabs;
