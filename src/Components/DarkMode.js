import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { themeCTX } from "../Context/ThemeContext";
import "../index.css";

export default function DarkMode() {
  const { mode, setMode } = useContext(themeCTX);

  const handleToggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  localStorage.setItem("theme", mode);

  return (
    <div className='absolute text-4xl right-4 top-4 cursor-pointer select-none' onClick={handleToggleMode}>
      {mode === "light" ? <MdDarkMode className='modeDown' /> : <MdLightMode className='modeDown' />}
    </div>
  );
}
