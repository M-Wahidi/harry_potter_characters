import React, { useContext } from "react";
import { searchCTX } from "../Context/SearchContext";
export default function Search() {
  const { setName } = useContext(searchCTX);
  return (
    <div className='dark:text-black transition-colors'>
      <input className='py-1 px-2 rounded-md' type='search' onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
