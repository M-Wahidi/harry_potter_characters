import React, { createContext, useState } from "react";

export const themeCTX = createContext("");

export default function ThemeContext(props) {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  return <themeCTX.Provider value={{ mode, setMode }}>{props.children}</themeCTX.Provider>;
}
