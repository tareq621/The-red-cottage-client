import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const searchSubmit = (event) => {
    event.preventDefault();
    const result = searchRef.current.value;
    console.log(result);
    navigate(`/search/${result}`);
    event.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal bg-[rgba(0,0,0,0.8)] opacity-0.7 z-[9998]">
        <form onSubmit={searchSubmit} className="absolute" action="">
          <input
            ref={searchRef}
            className="text-center bg-transparent placeholder-[rgb(0,0,0,.8)] border-[#fff] border-b-[1px] focus:outline-none text-[50px] md:w-[800px] lg:w-[800px] w-[400px] h-20 text-[rgb(0,0,0,.8)]"
            type="search"
            placeholder="Search..."
          />
        </form>
        <label className="modal-backdrop h-[572px]" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default SearchPage;
