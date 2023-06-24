import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { searchId } = useParams();
  return (
    <div className="md:ml-28 ml-10">
      <h2 className="text-4xl font-medium">Search for result: {searchId}</h2>
      <p className="mt-5">It seems we can not find what you are looking for.</p>
    </div>
  );
};

export default SearchResult;
