

const Gallary = () => {
  return (
    <div id="Gallary" className="max-w-[1240px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallary</h2>
      <div className="grid sm:grid-cols-5 gap-3">
        <div className="sm:col-span-3 row-span-2 col-span-2 hover:scale-105 duration-150 ease-in-out overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale:105 duration-150 ease-in-out"
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div >
        <div className="hover:scale-105 duration-150 ease-in-out">
          <img
            className="w-full h-full object-cover  hover:scale:105 duration-150 ease-in-out"
            src="https://images.pexels.com/photos/158441/venice-italy-sunset-grand-canal-158441.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
          />
        </div>
        <div className="hover:scale-105 duration-150 ease-in-out">
          <img
            className="w-full h-full object-cover hover:scale:105 duration-150 ease-in-out"
            src="https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
          />
        </div>
        <div className="hover:scale-105 duration-150 ease-in-out">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1450355/pexels-photo-1450355.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
          />
        </div>
        <div className="hover:scale-105 duration-150 ease-in-out">
          <img
            className="w-full h-full object-cover hover:scale:105 duration-150 ease-in-out"
            src="https://images.pexels.com/photos/974212/pexels-photo-974212.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
