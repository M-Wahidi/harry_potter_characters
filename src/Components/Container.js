import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import { filterContext, searchContext,themeContext } from "../Helper/Context";

function Container() {
  const [house, setHouse] = useState("Gryffindor");
  const [name, setName] = useState("");
  const [mode,setMode] = useState(localStorage.getItem('theme') || 'light')

  return (
    <filterContext.Provider value={{ house, setHouse }}>
    <searchContext.Provider value={{ name, setName }}>
    <themeContext.Provider value={{ mode, setMode }}>
        <div className={`mx-auto font-main ${mode}`}>
          <Header />
          <Content />
        </div>
    </themeContext.Provider>
    </searchContext.Provider>
    </filterContext.Provider>
  );
}

export default Container;
