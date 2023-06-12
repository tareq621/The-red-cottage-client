import { Link } from "react-router-dom";
import logo from "../../assets/drive-download-20230527T011812Z-001/RCFinalLogo.png";
import menu from "../../assets/drive-download-20230527T011812Z-001/menu.png";
import close from "../../assets/drive-download-20230527T011812Z-001/close.png";
import { useState } from "react";
import "../CSS/Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menubar = (
    <>
      <li className="text-[#D12928] font-pfdinmono hover:text-[#00CE1B] md:ml-8 md:my-0 my-7 text-[21px]">
        <Link to="/browsealldesign">Browse All Design</Link>{" "}
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-7 text-[21px]">
        <Link to="/designservices">Design Services</Link>
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-7 text-[21px]">
        <Link to="/about">About</Link>
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-7 text-[21px]">
        <Link to="/faq">FAQ</Link>
      </li>
      <li className="text-[#D12928] font-semibold font-pfdinmono hover:text-[#00CE1B]   md:ml-8 md:my-0 my-7 text-[21px]">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <section className=" w-full top-0 left-0">
      <div className="flex md:items-start items-center justify-between  py-2 md:px-40 lg:px-36 px-10">
        <div className="w-[120px] flex items-center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div></div>
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
        <div className="md:flex flex mr-10 lg:mt-9 md:mt-9 mt-0 gap-4">
          <div className="callIcon">
            <img
              width="25"
              src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
              alt=""
            />
          </div>
          <div className="searchIcon">
            <img
              width="25"
              height="50"
              src="https://img.icons8.com/ios-filled/50/search--v1.png"
              alt="search--v1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
