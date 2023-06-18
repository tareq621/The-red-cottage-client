import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = ({ search, setSearch }) => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const searchSubmit = (event) => {
    event.preventDefault();
    const result = searchRef.current.value;
    console.log(result);
    navigate(`/search/${result}`);
  };

  return (
    <>
      <div className="bg-[rgb(0,0,0,8)] fixed top-0 left-0 right-0 bottom-0 z-[9998] opacity-[0.7] md:h-[1212px] h-[572px]">
        <button
          onClick={() => setSearch(!search)}
          className="absolute left-[1200px] md:h-[1212px] h-[572px] mr-28 p-60"
        >
          cancel
        </button>
        <button
          onClick={() => setSearch(!search)}
          className="absolute right-[1200px] md:h-[1212px] h-[572px] ml-28 p-60"
        >
          cancel
        </button>
        <div className="mt-28 z-50 text-center py-44 leading-52 font-mono w-full">
          <form onSubmit={searchSubmit} action="">
            <div>
              <input
                ref={searchRef}
                className="bg-[rgb(0,0,0,8)] text-center border-[#fff] border-b-2 focus:outline-none  text-[50px] w-2/3 h-20 font-[rgb(0,0,0)]"
                type="search"
                placeholder="Search..."
              />
              <button
                onClick={() => setSearch(!search)}
                className="absolute right-[100px] mt-20 md:h-[1212px] h-[572px] w-full p-60"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
