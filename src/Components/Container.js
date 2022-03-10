import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import { filterContext, searchContext } from "../Helper/Context";

function Container() {
  const [house, setHouse] = useState("Gryffindor");
  const [name, setName] = useState("");

  return (
    <filterContext.Provider value={{ house, setHouse }}>
      <searchContext.Provider value={{ name, setName }}>
        <div className='container mx-auto font-main'>
          <Header />
          <Content />
        </div>
      </searchContext.Provider>
    </filterContext.Provider>
  );
}

export default Container;
