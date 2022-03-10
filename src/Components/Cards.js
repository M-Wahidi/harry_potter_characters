import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "./Card";
import { filterContext } from "../Helper/Context";
import { searchContext } from "../Helper/Context";

export default function Cards() {
  const { house } = useContext(filterContext);
  const { name } = useContext(searchContext);
  const [filterData, setFilterData] = useState([]);

  const fetchCharacters = async (house) => {
    const resp = await fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`);
    return resp.json();
  };
  const { data, status, error } = useQuery(["Characters", house], () => fetchCharacters(house), {});

  useEffect(() => {
    if (status === "success") {
      setFilterData(data.find((char) => char.name.toLowerCase().includes(name.toLowerCase().trim())));
      console.log();
    }
  }, [name]);

  if (status === "loading") {
    return <p className='font-sub'>Loading...</p>;
  }
  if (error) {
    return <h1 className='font-sub'>{error.message}</h1>;
  }

  return (
    <div className='flex flex-wrap justify-center gap-3 '>
      {name !== "" && <Card card={filterData || {}} />}
      {name === "" && data.map((card, idx) => <Card key={idx} card={card} />)}
    </div>
  );
}
