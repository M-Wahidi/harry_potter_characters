import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { searchCTX } from "../Context/SearchContext";
import { filterCTX } from "../Context/FilterContext";
import Card from "./Card";

export default function Cards() {
  const { house } = useContext(filterCTX);
  const { name } = useContext(searchCTX);

  const fetchHouses = async (house) => {
    const resp = await fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`);
    return resp.json();
  };
  const { data, status, error } = useQuery(["Houses", house], () => fetchHouses(house), { keepPreviousData: true });

  const fetchCharacters = async () => {
    const resp = await fetch(`https://hp-api.herokuapp.com/api/characters/`);
    return resp.json();
  };
  const {
    data: AllCharchters,
    status: searchStatus,
    error: SeachError,
  } = useQuery("Characters", () => fetchCharacters());

  useEffect(() => {
    if (searchStatus === "success") {
      AllCharchters.filter((char) => char.name.toLowerCase().includes(name.toLowerCase().trim()));
    }
  }, [name, AllCharchters, searchStatus]);

  if (status === "loading" || searchStatus === "loading") {
    return <p className='font-sub'>Loading...</p>;
  }
  if (error || SeachError) {
    return <h1 className='font-sub'>{error.message}</h1>;
  }

  return (
    <div className='py-3 flex flex-wrap justify-center gap-5'>
      {name !== "" &&
        AllCharchters.filter((card) => {
          return card.name.toLowerCase().includes(name.toLowerCase().trim());
        }).map((card, idx) => <Card key={idx} card={card} />)}
      {name === "" && data.map((card, idx) => <Card key={idx} card={card} />)}
    </div>
  );
}
