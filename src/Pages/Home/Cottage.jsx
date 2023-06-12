const Cottage = ({ cottage }) => {
  const { name, image } = cottage;
  return (
    <div className="w-full md:w-1/3 px-6 py-6">
      <img src={image} alt="Shoes" className="rounded-xl py-4" />
      <p className="text-[17px] font-pfdinmono font-bold text-center">{name}</p>
    </div>
  );
};

export default Cottage;
