import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer lg:py-28 md:py-24 py-20 lg:px-16 md:px-16 px-5 lg:gap-28 md:gap-28 gap-10 w-full bg-[#231F20] static text-[#FCFCFC]">
      <div>
        <span className="text-[20px] font-pfdinmono font-bold text-[#FCFCFC] pb-3">
          Contact Information
        </span>
        <p className="font-pfdinmono ">The Red Cottage</p>
        <p className="font-pfdinmono ">Palm Coast, Fl, 32137 USA</p>
        <div className="mt-3 flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#FFFFFF"
            width="24"
            height="15"
          >
            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
          </svg>
          <p className="text-[16px]  text-[#FCFCFC] font-extralight	">
            1-888-588-6348
          </p>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="18"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
          >
            <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 5.5976562 6 L 18.402344 6 L 12 10 L 5.5976562 6 z M 5 8.6269531 L 12 13 L 19 8.6269531 L 19 18 L 5 18 L 5 8.6269531 z"></path>
          </svg>
          <p className="text-[16px] text-[#FCFCFC] font-extralight	">
            plans@theredcottage.com
          </p>
        </div>
      </div>
      <div>
        <span className="text-[20px] font-pfdinmono font-bold text-[#FCFCFC] pb-3">
          Quick Links
        </span>
        <Link className="link">My Account</Link>
        <Link to="/browsealldesign" className="link">
          Browse All Designs
        </Link>
        <Link to="/about" className="link">
          About US
        </Link>
        <Link to="/designservices" className="link">
          Design Services
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/faq" className="link">
          FAQs
        </Link>
      </div>
      <div>
        <h1 className="text-[20px] font-bold font-pfdinmono text-[#FCFCFC] pb-3">
          Newsletter
        </h1>

        <div className="relative">
          <input
            type="text"
            placeholder="Your Email Address....."
            className="input text-black font-belleza rounded-l-lg pr-40 w-full"
          />
          <button
            className="btn hover:bg-[#991A1E] 
          font-pfdinmono lg:px-3 md:px-3 px-[150px] lg:py-1 md:py-1 btn-bg-[#E20303] border-none lg:rounded-r-lg rounded lg:mt-0 md:mt-0 mt-2 text-[white] lg:absolute w-full md:w-1/4 lg:w-1/4 top-0 right-0 bg-[#991A1E]"
          >
            Sing Up
          </button>
        </div>

        <div className="grid grid-flow-col gap-4 mt-6">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-gray-50"
            >
              <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 12 24 L 12 14 L 9 14 L 9 11 L 12 11 L 12 8 C 12 5.5 13 4 16 4 L 19 4 L 19 7 L 17.699219 7 C 16.800781 7 16 7.800781 16 8.699219 L 16 11 L 20 11 L 19.5 14 L 16 14 L 16 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              className="fill-gray-50"
            >
              <path d="M13,0C5.8210001,0,0,5.8210001,0,13c0,5.5074997,3.4265003,10.2115002,8.2624998,12.1049995	c-0.1134996-1.0279999-0.2165003-2.6065006,0.0454998-3.7290001c0.2360001-1.0139999,1.5244999-6.4619999,1.5244999-6.4619999	s-0.3889999-0.7789993-0.3889999-1.9294996c0-1.8079996,1.0474997-3.1570005,2.3520002-3.1570005	c1.1094999,0,1.6445007,0.8330002,1.6445007,1.8310003c0,1.1160002-0.7095003,2.783-1.0769997,4.3280001	c-0.3065004,1.2945004,0.6490002,2.3500004,1.9249992,2.3500004c2.3104992,0,4.0865002-2.4365005,4.0865002-5.9530001	c0-3.1125002-2.2360001-5.2890005-5.4295006-5.2890005c-3.6984997,0-5.8695002,2.7744999-5.8695002,5.6420002	c0,1.1170006,0.4300003,2.3150005,0.9674997,2.9669991c0.1059999,0.1289997,0.1215,0.2415009,0.0900002,0.3724995	c-0.0985003,0.4104996-0.3175001,1.2935009-0.3610001,1.4745007c-0.0565004,0.2385006-0.1885004,0.2880001-0.4344997,0.1735001	c-1.6239996-0.7560005-2.6389999-3.1294994-2.6389999-5.0365c0-4.1005001,2.9790001-7.8670001,8.5900002-7.8670001	c4.5100002,0,8.0144997,3.2129998,8.0144997,7.5084996c0,4.4804993-2.8255005,8.0860004-6.7460003,8.0860004	c-1.3174992,0-2.5555-0.6844997-2.9790001-1.493c0,0-0.6520004,2.4820004-0.8105001,3.0904999	c-0.2934999,1.1289997-1.0854998,2.5450001-1.6164999,3.407999C10.3675003,25.7964993,11.6599998,26,13,26	c7.1790009,0,13-5.8209991,13-13S20.1795006,0,13,0z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
        </div>
        <p className="mt-5">©2023 The RED cottage | Site by MCTGWD</p>
      </div>
    </footer>
  );
};

export default Footer;
