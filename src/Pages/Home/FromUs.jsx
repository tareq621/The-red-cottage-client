import badge from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 1.png";
import customize from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 2.png";
import designer from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 3.png";
import pdf from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/icon 4.png";
import "../CSS/FromUs.css";

const FromUs = () => {
  return (
    <container className="background">
      <section className="kuddus">
        <div className="flex">
          <div className="mt-[250px] ms-24">
            <div className="text-[85px] leading-[120px] font-medium ">
              <p className="font-belleza">
                Why Buy Directly<br></br> From Us?
              </p>
            </div>
            <div className="mt-16">
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

          <div className="icon_section flex md:flex-col flex-row ms-40 gap-28 mt-[400px]">
            <div className="fromUsText">
              <div className="flex justify-center items-center gap-36 mr-28">
                <div className="icon1 flex">
                  <img className="w-12 h-16" src={badge} alt="" />

                  <p className="my-3 leading-normal font-arabic pl-3 text-[16px]">
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

              <div className="flex gap-12">
                <div className="icon3 flex justify-center">
                  <img className="w-12 h-16" src={designer} alt="" />
                  <div>
                    <p className="my-3 pl-3 text-[16px] font-pfdinmono">
                      Our land designer have combined 55 years experience
                    </p>
                  </div>
                </div>

                <div className="icon4 flex justify-center">
                  <img className="w-12 h-16" src={pdf} alt="" />
                  <div>
                    <p className="my-3 pl-3 text-[16px] font-pfdinmono font-semibold">
                      Receive your plan today - most PDF plans are fulfilled the
                      same day.*
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <li className="list-disc font-pfdinmono">
                Plan modification may take longer
              </li>
            </div>
          </div>
        </div>
      </section>
    </container>
  );
};

export default FromUs;
