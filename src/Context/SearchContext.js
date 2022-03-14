import React, { createContext, useState } from "react";

export const searchCTX = createContext("");

export default function SearchContext(props) {
  const [name, setName] = useState("");
  return <searchCTX.Provider value={{ name, setName }}>{props.children}</searchCTX.Provider>;
}
