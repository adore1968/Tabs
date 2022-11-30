import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Company({ item, index }) {
  const { setIndex } = useGlobalContext();
  return (
    <>
      <button onClick={() => setIndex(index)}>{item.company}</button>
    </>
  );
}

export default Company;
