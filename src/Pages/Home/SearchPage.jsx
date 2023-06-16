import { useState } from "react";

const SearchPage = ({ search, setSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Perform your search logic using the searchText
    console.log("Search text:", searchText);
    // ...
  };
  return (
    <div>
      <div className="bg-[rgb(0,0,0,8)] fixed top-0 left-0 right-0 bottom-0 z-[9998] opacity-[0.7] md:h-[1212px] h-[572px]">
        <button
          onClick={() => setSearch(!search)}
          className="absolute left-[1200px] md:h-[1212px] h-[572px]"
        >
          cancel
        </button>
        <div className="mt-28 z-50 text-center py-44 leading-52 font-mono w-full">
          <form onChange={handleInputChange} action="">
            <input
              className="bg-[rgb(0,0,0,8)] text-center border-[#fff] border-b-2 focus:outline-none  text-[50px] w-2/3 h-20 font-[rgb(0,0,0)]"
              type="search"
              placeholder="Search..."
              value={searchText}
              onClick={handleSearch}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
