import Search from "./Search";
import Filter from "./Filter";
export default function Header() {
  return (
    <div className='flex flex-col text-center gap-10 py-7 bg-gray-200'>
      <h1 className='text-5xl'>Harry Potter Charechters</h1>
      <div className='flex justify-center gap-3'>
        <Search />
        <Filter />
      </div>
    </div>
  );
}
