import red from "../assets/Website-20230527T011956Z-001/Website/About us/About us Assets/IMG_3253.jpg";
import "./CSS/About.css";

const About = () => {
  return (
    <section>
      <div className="containerAbout">
        <div className="pt-10">
          <h1 className="text-[#000000] text-[54px] mt-28 font-pfdinmono text-center">
            About the Red Cottage
          </h1>
        </div>
      </div>

      <div className="articleBackground">
        <div className="">
          <div className="aboutContainer pt-16">
            <div className="md:flex flex-wrap flex-cols gap-28  justify-center mt-10">
              <div>
                <ul>
                  <a className="flex justify-center items-center">
                    <span className="mx-3">
                      <img className="w-[15px]" src={red} alt="" />
                    </span>
                    <span className="text-[25px] font-pfdinmono font-medium">
                      Home Plan
                    </span>
                  </a>
                </ul>
              </div>
              <div>
                <ul>
                  <a className="flex justify-center items-center">
                    <span className="mx-3">
                      <img className="w-[15px]" src={red} alt="" />
                    </span>
                    <span className="text-[25px] font-pfdinmono font-medium">
                      Cottage
                    </span>
                  </a>
                </ul>
              </div>
            </div>
            <div className="secondPart md:flex flex-cols gap-28 justify-center mt-10">
              <div>
                <ul>
                  <a className="flex items-center justify-center">
                    <span className="mx-3">
                      <img className="w-[15px]" src={red} alt="" />
                    </span>
                    <span className="text-[25px] font-pfdinmono font-medium">
                      Craftsman
                    </span>
                  </a>
                </ul>
              </div>
              <div>
                <ul>
                  <a className="flex items-center justify-center">
                    <span className="mx-3">
                      <img className="w-[15px]" src={red} alt="" />
                    </span>
                    <span className="text-[25px] font-pfdinmono font-medium">
                      Log Homes
                    </span>
                  </a>
                </ul>
              </div>
              <div>
                <ul>
                  <a className="flex items-center justify-center">
                    <span className="mx-3">
                      <img className="w-[15px]" src={red} alt="" />
                    </span>
                    <span className="text-[25px] font-pfdinmono font-medium">
                      Vacation Homes
                    </span>
                  </a>
                </ul>
              </div>
            </div>
            <div>
              <div className="thirdPartPart md:flex flex-cols gap-28 justify-center mt-10">
                <div>
                  <ul>
                    <a className="flex items-center justify-center">
                      <span className="mx-3">
                        <img className="w-[15px]" src={red} alt="" />
                      </span>
                      <span className="text-[25px] font-pfdinmono font-medium">
                        Energy Efficient Homes
                      </span>
                    </a>
                  </ul>
                </div>
                <div>
                  <ul>
                    <a className="flex items-center justify-center">
                      <span className="mx-3">
                        <img className="w-[15px]" src={red} alt="" />
                      </span>
                      <span className="text-[25px] font-pfdinmono font-medium">
                        Bungalow
                      </span>
                    </a>
                  </ul>
                </div>
                <div>
                  <ul>
                    <a className="flex items-center justify-center">
                      <span className="mx-3">
                        <img className="w-[15px]" src={red} alt="" />
                      </span>
                      <span className="text-[25px] font-pfdinmono font-medium">
                        Custom Plan Design
                      </span>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="articleContainer lg:mt-28 mt-10 lg:px-24 md:px-24 px-3 font-pfdinmono font-normal	justify-center">
            <p className="lg:text-[21px] text-[16px] tracking-wide">
              Brian K. Eicholtz was raised in a family of framers and builders
              and has been freelance \Designing homes since 1991. Although
              having roots in East Michigan, and West Central Florida, he has
              done the bulk of his design work in West Michigan, focusing on
              cottage, craftsman, and bungalow designs along the beautiful Lake
              Michigan shorelines. With a background in framing, it is important
              that the plans produced by TheRedCottage.com are clear, and easy
              to read, so that the intent of the design is reflected in the
              completed home.
            </p>
            <p className="pt-5 lg:text-[21px] text-[16px]">
              Currently on TheRedCottage.com are the designs of Brian K.
              Eicholtz and select guest designers. Copyrights of the respective
              plans are on the plan pages.
            </p>
            <p className="pt-5 lg:text-[21px] text-[16px]">
              I look forward to working with you!
            </p>
            <p className="pt-5 lg:text-[21px] text-[16px]"> Sincerely,</p>
            <h1 className="pt-5 text-[21px] text-[#E20303]">
              Brain K. Eicholtz
            </h1>
            <div className="mt-20">
              <ul className="bg-[#E20303] w-14">
                <a className="flex gap-1">
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                  </svg>
                  <span className="text-white font-pfdinmono">Save</span>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
