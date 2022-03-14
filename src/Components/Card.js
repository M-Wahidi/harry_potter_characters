import defaultImage from "../Assets/default.png";
import gryffindor from "../Assets/gryffindor.png";
import slytherin from "../Assets/slytherin.png";
import ravenclaw from "../Assets/revenclaw.png";
import hufflepuff from "../Assets/hufflepuff.png";
import muggles from "../Assets/NO_HOUSE.png";

const HOUSES_ICONS = {
  Gryffindor: gryffindor,
  Slytherin: slytherin,
  Ravenclaw: ravenclaw,
  Hufflepuff: hufflepuff,
};

function Card({ card }) {
  return (
    <div
      className='flex gap-2 text-2xl bg-gray-100 border font-sub relative dark:bg-gray-800 dark:border-gray-800 transition-colors'
      style={{ width: "400px", height: "220px", backgroundSize: "cover" }}
    >
      <div>
        <img style={{ height: "100%", width: "170px" }} src={card.image || defaultImage} alt={card.name} />
        <img
          style={{ height: "50px", width: "50px", right: "5px", bottom: "10px" }}
          src={HOUSES_ICONS[card.house] || muggles}
          alt='logo'
          className='absolute'
        />
      </div>
      <div className='flex flex-col my-5 mx-1 gap-3'>
        <div className='text-md'>{card.name || "Not Found"}</div>
        <div className='text-md'>{card.house || "Not Specified"}</div>
        <div className='text-md'>{!card.yearOfBirth ? "Unknown" : new Date().getFullYear() - card.yearOfBirth}</div>
      </div>
    </div>
  );
}

export default Card;
