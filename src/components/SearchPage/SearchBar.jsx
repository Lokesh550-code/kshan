import {Search} from 'lucide-react'

const SearchBar = ({search, inputRef, setQuery, setSearch}) => {
  return (
    <div className='flex items-center justify-between gap-4 h-full w-full'>
      {" "}
      <Search size={20} />
      <form
        className="h-full w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
          setSearch("");
        }}
      >
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          ref={inputRef}
          className="h-12 w-full bg-stone-800 outline-none focus:outline-none"
          type="text"
          placeholder="Search for Movies, Shows or Anime..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
