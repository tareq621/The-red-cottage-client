import women from "../../assets/Website-20230527T011956Z-001/Website/HomePage/Assets/young-woman-working-laptop-floor-white-background.png";

const From = () => {
  return (
    <section className=" bg-[#EDEDED] font-pfdinmono relative md:mt-5 mt-40 ">
      <div className="relative">
        <button className="absolute md:left-[40%] left-[30%] md:top-[795px] top-[1295px]  hover:bg-none text-[#CE1616] font-pfdinmono text-[20px] py-3 px-7 w-64 bg-[#ffffff] rounded">
          Browse All Design
        </button>
      </div>
      <div className="md:ml-24 ml-3 md:py-16 py-10 pt-40">
        <div className="form-control max-w-md">
          <label className="label">
            <span className="label-text text-[20px] font-pfdinmono font-bold">
              Jump to Specific Plan
            </span>
          </label>
          <select defaultValue={"DEFAULT"} className="select">
            <option value="DEFAULT">Any</option>
            <option value="1">Select 1</option>
            <option value="2">Select 2</option>
            <option value="3">Select 3</option>
            <option value="4">Select 4</option>
            <option value="5">Select 5</option>
          </select>
        </div>

        <div>
          <label className="label mt-6">
            <span className="label-text text-[20px] font-pfdinmono font-bold">
              Plan # or Name
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full h-9 max-w-md"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className=" divide-form flex gap-5">
            <div>
              <label className="label mt-6">
                <span className="label-text text-[20px] font-pfdinmono font-bold">
                  Square Footage
                </span>
              </label>
              <input
                type="text"
                placeholder="Min"
                className="input input-bordered w-full  h-9 max-w-md"
              />
            </div>
            <div className="md:mr-16">
              <label className="label mt-11">
                <span className="label-text text-[20px] font-pfdinmono font-bold"></span>
              </label>
              <input
                type="text"
                placeholder="Max"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
          </div>
          <div className=" divide-form flex gap-5">
            <div>
              <label className="label mt-6">
                <span className="label-text text-[20px] font-pfdinmono font-bold">
                  Bedrooms
                </span>
              </label>
              <input
                type="text"
                placeholder="Min"
                className="input input-bordered w-full  h-9 max-w-md"
              />
            </div>
            <div>
              <label className="label mt-11">
                <span className="label-text text-[20px] font-pfdinmono font-bold"></span>
              </label>
              <input
                type="text"
                placeholder="Min"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
          </div>
          <div className=" divide-form flex gap-5">
            <div>
              <label className="label mt-6">
                <span className="label-text text-[20px] font-pfdinmono font-bold">
                  Bathrooms
                </span>
              </label>
              <input
                type="text"
                placeholder="Min"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
            <div className="md:mr-16">
              <label className="label mt-11">
                <span className="label-text text-[20px] font-pfdinmono font-bold"></span>
              </label>
              <input
                type="text"
                placeholder="Max"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
          </div>
          <div className=" divide-form flex gap-5">
            <div>
              <label className="label mt-6">
                <span className="label-text text-[20px] font-pfdinmono font-bold">
                  Stories
                </span>
              </label>
              <input
                type="text"
                placeholder="Min"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
            <div>
              <label className="label mt-11">
                <span className="label-text text-[20px] font-pfdinmono font-bold"></span>
              </label>
              <input
                type="text"
                placeholder="Max"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
          </div>
          <div className="form-control max-w-md">
            <label className="label">
              <span className="label-text text-[20px] font-pfdinmono font-bold">
                Foundation
              </span>
            </label>
            <select defaultValue={"DEFAULT"} className="select">
              <option value="DEFAULT">Any</option>
              <option value="1">Select 1</option>
              <option value="2">Select 2</option>
              <option value="3">Select 3</option>
              <option value="4">Select 4</option>
              <option value="5">Select 5</option>
            </select>
          </div>
          <div className="form-control max-w-md">
            <label className="label">
              <span className="label-text text-[20px] font-pfdinmono font-bold">
                Jump to Specific Plan
              </span>
            </label>
            <select defaultValue={"DEFAULT"} className="select">
              <option value="DEFAULT">Any</option>
              <option value="1">Select 1</option>
              <option value="2">Select 2</option>
              <option value="3">Select 3</option>
              <option value="4">Select 4</option>
              <option value="5">Select 5</option>
            </select>
          </div>
          <div className=" divide-form flex gap-5">
            <div>
              <label className="label mt-6 ] font-pfdinmono">
                <span className="label-text text-[20px] font-extrabold">
                  Number of Vehicles
                </span>
              </label>
              <input
                type="text"
                placeholder="Min"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
            <div>
              <label className="label mt-11">
                <span className="label-text text-[20px] font-pfdinmono font-bold"></span>
              </label>
              <input
                type="text"
                placeholder="Max"
                className="input input-bordered w-full h-9 max-w-md"
              />
            </div>
          </div>
          <div className="flex gap-5 font-belleza text-[#E20303] mt-14 mb-20">
            <button className="bg-[#E20303] font-pfdinmono font-semibold px-9 py-3 rounded-2xl text-gray-200 text-[20px]">
              Reset
            </button>
            <button className="bg-gray-100  font-pfdinmono font-semibold px-9 py-3 rounded-2xl text-black">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="absolute md:w-[50%] w-[70%] md:bottom-[560px] bottom-[1170px] md:right-[30px] right-[60px]">
        <img src={women} alt="" />
      </div>
    </section>
  );
};

export default From;
