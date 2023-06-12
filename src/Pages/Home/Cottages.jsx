import { useEffect, useState } from "react";
import Cottage from "./Cottage";
import cottageBackground from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/white-brush-stroke-texture-background.png";

const Cottages = () => {
  const [cottages, setCottages] = useState([]);
  useEffect(() => {
    fetch("Cottages.json")
      .then((res) => res.json())
      .then((data) => setCottages(data));
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${cottageBackground})` }}
      className="cottageLibrary relative bottom-20 "
    >
      <h1
        className="text-[60px] font-belleza text-[#E20303] my-10
            text-center"
      >
        Our Home Plan Styles
      </h1>
      <div className="font-medium flex flex-wrap justify-center px-16 text-[60px]">
        {cottages.map((cottage) => (
          <Cottage key={cottage.id} cottage={cottage}></Cottage>
        ))}
      </div>
      <div className="fromContainer md:ml-24 ml-12 md:mt-32 mt-28">
        <h1 className="text-[#E20303] text-[60px] font-belleza ">
          Find Your Home Plan
        </h1>
        <div className="flex gap-5 font-belleza text-[#E20303] mt-14">
          <button className="bg-[#E20303] font-pfdinmono font-semibold px-9 py-3 rounded-2xl text-gray-200 text-[20px]">
            Reset
          </button>
          <button className="bg-gray-100  font-pfdinmono font-semibold px-9 py-3 rounded-2xl text-black">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cottages;
