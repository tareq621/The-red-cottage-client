import { Link } from "react-router-dom";
import logo from "../../assets/drive-download-20230527T011812Z-001/RCFinalLogo.png";
import menu from "../../assets/drive-download-20230527T011812Z-001/menu.png";
import close from "../../assets/drive-download-20230527T011812Z-001/close.png";
import { useState } from "react";
import "../CSS/Navbar.css";
import SearchPage from "../Home/SearchPage";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menubar = (
    <>
      <li className="text-[#D12928] font-pfdinmono hover:text-[#00CE1B] md:ml-8 md:my-0 my-4 md:text-[21px] lg:text-[18px] text-[18px]">
        <Link to="/browsealldesign">Browse All Design</Link>{" "}
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-4 md:text-[21px] lg:text-[18px] text-[18px]">
        <Link to="/designservices">Design Services</Link>
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-4 md:text-[21px] lg:text-[18px] text-[18px]">
        <Link to="/about">About</Link>
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-4 md:text-[21px] lg:text-[18px] text-[18px]">
        <Link to="/faq">FAQ</Link>
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-4 md:text-[21px] lg:text-[18px] text-[18px]">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <section className=" w-full top-0 left-0">
      <div className="flex md:items-start items-center justify-between  py-2 ">
        <div className="lg:w-[120px] md:w-[120px] w-[100px] flex items-center md:ml-40 lg-ml-40 ml-10">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <div className="absolute right-8 top-10 cursor-pointer md:hidden ">
              <img className="w-[25px]" src={close} alt="" />
            </div>
          ) : (
            <div className="absolute right-8 top-10 cursor-pointer md:hidden ">
              <img className="w-[25px]" src={menu} alt="" />
            </div>
          )}
        </div>

        <div>
          <ul
            className={`md:flex md:items-center md:py-8 py-3 md:mt-0 mt-7 bg-[#EDEDED] md:bg-[white] absolute md:static md:z-auto left-0 w-full md:w-auto md-pl-0  text-center ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {menubar}
          </ul>
        </div>
        <div className="md:flex flex lg:mt-9 md:mt-9 mt-0 gap-4 lg:mr-10 md:mr-10 mr-20">
          <div className="callIcon">
            <img
              width="25"
              src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
              alt=""
            />
          </div>
          <div className="searchIcon">
            <div>
              <label htmlFor="my_modal_7" className="btn btn-sm px-1">
                <img
                  width="25"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/search--v1.png"
                  alt="search--v1"
                />
              </label>
            </div>
          </div>
          {{} && (
            <div>
              <SearchPage />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
