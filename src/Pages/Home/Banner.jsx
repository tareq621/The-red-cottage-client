import "../CSS/Banner.css";
const Banner = () => {
  return (
    <section className="bannerBackground font-belleza">
      <div className="bannerText ml-10 md:ml-40 md:mt-12 mt-10">
        <div className="font-semibold pb-7">
          <p className="md:text-[24px] lg:text-[24px] text-[20px]  leading-loose font-belleza">
            WE SALE{" "}
            <span className="text-[#ff0000]  font-belleza">HOME PLANS</span>TO
            BUILDERS
          </p>
          <p className="text-[24px] mt-1  font-belleza">
            & HOME OWNERS THROUGHOUT THE
          </p>
        </div>
        <div className="mt-3">
          <p className="lg:text-[55px] md:text-[52px] text-[45px] font-medium  font-belleza	">
            USA & CANADA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
