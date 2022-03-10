import React, { useContext } from "react";
import { filterContext } from "../Helper/Context";
export default function Filter() {
  const { setHouse } = useContext(filterContext);
  return (
    <div>
      <select
        name='charechters'
        id='charechters'
        className='text-center text-xl rounded-md'
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
