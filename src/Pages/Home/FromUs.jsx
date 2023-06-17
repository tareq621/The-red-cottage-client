import badge from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 1.png";
import customize from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 2.png";
import designer from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 3.png";
import pdf from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 4.png";
import "../CSS/FromUs.css";

const FromUs = () => {
  return (
    <section className="background">
      <section className="kuddus">
        <div className="flex-cols md:flex lg:flex">
          <div className="md:mt-[250px] lg:mt-[250px] mt-6 md:ms-24 lg:ms-24 ms-2">
            <div className="md:text-[85px] lg:text-[85px] text-[50px] leading-[55px] lg:leading-[120px]  md:leading-[120px] font-medium ">
              <p className="font-belleza">
                Why Buy Directly<br></br> From Us?
              </p>
            </div>
            <div className="md:mt-16 lg:mt-16 mt-28">
              <a href="">
                <button
                  style={{
                    borderColor: "#E20303",
                    fontSize: "20px",
                    fontWwight: "500",
                    color: "#E20303",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 1px",
                    borderRadius: "10px 10px 10px 10px",
                    backgroundColor: "#61CE7000",
                  }}
                  className="px-7 py-2 mb-8 font-pfdinmono"
                >
                  See More
                </button>
              </a>
            </div>
          </div>

          <div
            className="icon_section md:mr-0 lg:mr-0 mr-52 flex-cols 
           md:flex-col flex-row md:ms-40 lg:ms-40 ms-0 gap-28 md:mt-[400px] lg:mt-[400px] mt-[80px]"
          >
            <div className="fromUsText">
              <div className="flex justify-center items-center mg:gap-36 md:gap-36 gap-20 mr-28">
                <div className="icon1 flex">
                  <img className="w-12 h-16" src={badge} alt="" />

                  <p className="my-3 leading-normal font-pfdinmono pl-3 text-[16px]">
                    Beautiful, award wining home plan design
                  </p>
                </div>
                <div className="icon2 flex">
                  <img className="w-12 h-16" src={customize} alt="" />
                  <div>
                    <p className="my-3 pl-3 text-[16px] font-pfdinmono ">
                      We offer customize our plans to meet clint need
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mg:gap-36 md:gap-36 gap-20 mr-28">
                <div className="icon1 flex">
                  <img className="w-12 h-16" src={designer} alt="" />

                  <p className="my-3 leading-normal font-pfdinmono pl-3 text-[16px]">
                    Our land designer have combined 55 years experience{" "}
                  </p>
                </div>
                <div className="icon2 flex ml-10">
                  <img className="w-12 h-16" src={pdf} alt="" />
                  <div>
                    <p className="my-3 pl-3 text-[16px] font-pfdinmono ">
                      Receive your plan today - most PDF plans are fulfilled the
                      same day.*{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <li className="list-disc font-pfdinmono md:mt-24 lg:mt-24 mt-1">
                Plan modification may take longer
              </li>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FromUs;
