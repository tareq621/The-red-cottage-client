import callContactGmail from "../assets/Website-20230527T011956Z-001/Website/contact/Contact_us__assets/icons 3d.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./CSS/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2vs1zak",
        "redcottage_onu3zuc",
        e.target,
        "JUxhXFgmOWoACKN1N"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Send Successful");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="relative">
        <button className="absolute md:left-[40%] left-[27%] md:top-[1250px] lg:top-[1250px] top-[1650px]  hover:bg-none text-[#CE1616] font-pfdinmono text-[20px] py-3 px-7 w-64 bg-[#ffffff] rounded">
          Browse All Design
        </button>
      </div>
      <div className="containerContact">
        <div className="pt-10">
          <h1 className="text-[#000000] text-[54px] font-pfdinmono text-center">
            About the Red Cottage
          </h1>
        </div>
      </div>
      <div className="formSection bg-[#ECECEB] h-auto">
        <div className="px-3 flex-cols md:flex lg:flex">
          <div className="pr-20">
            <p className="font-pfdinmono font-medium md:mt-20 lg:mt-20 mt-10">
              “*” Indicates required fileds
            </p>
            <div className="fromContainer mt-10">
              <form ref={form} onSubmit={sendEmail} className="w-1/2">
                <div className="md:flex lg:flex flex-cols gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input focus:outline-none 
                    input-bordered border-[#69727d] text-[15px] w-[280px] md:w-[380px]  h-9 max-w-xs rounded-none"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      name="company"
                      className="input focus:outline-none 
                    input-bordered border-[#69727d] text-[15px] w-[280px] md:w-[380px]  h-9 mt-2 max-w-xs rounded-none"
                    />
                  </div>
                  <div className="mt-2 md:mt-0 lg:mt-0">
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      className="input focus:outline-none 
                    input-bordered border-[#69727d] text-[15px] w-[280px] md:w-[380px] h-9 max-w-xs rounded-none"
                    />
                    <input
                      type="email*"
                      placeholder="Email*"
                      name="user_email"
                      className="input focus:outline-none 
                    input-bordered border-[#69727d] text-[15px] w-[280px] md:w-[380px]  h-9 mt-2 max-w-xs rounded-none"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Subject*"
                  name="subject"
                  className="input focus:outline-none 
                    input-bordered border-[#69727d] text-[15px] w-[280px] md:w-[648px] lg:w-[648px] h-9 mt-2  rounded-none"
                />
                <textarea
                  className="focus:outline-none 
                     border border-slate-500 text-[15px] w-[280px] md:w-[648px] lg:w-[648px]  h-24 mt-2  rounded-none pl-4 pt-2"
                  placeholder="Message*"
                  name="textarea"
                ></textarea>
                <div className="md:relative lg:relative relative-none left-[417px]">
                  <button
                    type="submit"
                    className="bg-[#CE1616] text-white font-pfdinmono py-2 px-6 rounded"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="pintarestButton mt-20">
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

          <div className="mr-28">
            <div className="flex flex-col mt-20">
              <div className="font-pfdinmono">
                <h1 className="text-[#CE1616] text-3xl font-semibold pb-2">
                  Contact Information
                </h1>
                <p>The Red Cottage</p>
                <p>Palm Coast, Fl, 32137 USA</p>
              </div>
              <div className="mt-3 flex gap-2">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                  alt="phone--v1"
                />
                <p className="text-[16px]">1-888-588-6348</p>
              </div>
              <div className="flex gap-2">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material/24/gmail--v1.png"
                  alt="gmail--v1"
                />
                <p className="text-[16px]">plans@theredcottage.com</p>
              </div>
              <div className="mt-5">
                <img className="w-[650px]" src={callContactGmail} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
