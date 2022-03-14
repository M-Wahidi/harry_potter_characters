import { useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import SearchContext from "../Context/SearchContext";
import FilterContext from "../Context/FilterContext";
import { themeCTX } from "../Context/ThemeContext";

function Container() {
  const { mode } = useContext(themeCTX);
  return (
    <FilterContext>
      <SearchContext>
        <div className={`mx-auto font-main ${mode}`}>
          <Header />
          <Content />
        </div>
      </SearchContext>
    </FilterContext>
  );
}

export default Container;
