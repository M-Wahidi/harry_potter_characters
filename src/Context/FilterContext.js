import React, { createContext, useState } from "react";

export const filterCTX = createContext("");

export default function FilterContext(props) {
  const [house, setHouse] = useState("Gryffindor");

  return <filterCTX.Provider value={{ house, setHouse }}>{props.children}</filterCTX.Provider>;
}
