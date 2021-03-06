import React, { useContext } from "react";
import { filterCTX } from "../Context/FilterContext";
export default function Filter() {
  const { setHouse } = useContext(filterCTX);
  return (
    <div className='relative'>
      <select
        name='charechters'
        id='charechters'
        className='text-center text-xl rounded-md dark:text-black transition-colors'
        onChange={(e) => setHouse(e.target.value)}
      >
        <option value='Gryffindor'>Gryffindor</option>
        <option value='Hufflepuff'>Hufflepuff</option>
        <option value='Ravenclaw'>Ravenclaw</option>
        <option value='Slytherin'>Slytherin</option>
      </select>
    </div>
  );
}
