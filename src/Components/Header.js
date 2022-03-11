import Search from "./Search";
import Filter from "./Filter";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <div className='relative flex flex-col text-center gap-10 py-7 bg-gray-200 dark:bg-gray-700 dark:text-white transition-colors '>
       <DarkMode />
      <h1 className='text-5xl'>Harry Potter Charechters</h1>
      <div className='flex justify-center gap-3'>
        <Search />
        <Filter />
      </div>
    </div>
  );
}
