import "./Activities.css"; // Create a CSS file for custom styles (Activities.css)

const Activities = () => {
  return (
    <div className="max-w-[1240px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 group ">
        <img
          className="w-full h-full shadow-2xl border-4 border-white overflow-hidden"
          src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="overlay transition-opacity opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-lg font-bold">Beach</h3>
        </div>
      </div>
      <div className="relative p-4 group">
        <img
          className="w-full h-full shadow-2xl border-4 border-white"
          src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="overlay transition-opacity opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-lg font-bold">Resorts</h3>
        </div>
      </div>
      <div className="relative p-4 group">
        <img
          className="w-full h-full shadow-2xl border-4 border-white"
          src="https://images.pexels.com/photos/774042/pexels-photo-774042.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="overlay transition-opacity opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-lg font-bold">Hotels</h3>
        </div>
      </div>
    </div>
  );
};

export default Activities;
