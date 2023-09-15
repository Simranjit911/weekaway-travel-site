

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1240px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send Us Message</h2>
      <p className="text-center text-gray-700 py-2">We are standing by!</p>
      <div className="grid md:grid-cols-2 ">
        <img
          src="https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" className="w-full md:h-full object-cover p-2 max-w-[600px] h-[200px]"
        />
        <form>
            <div className="grid grid-cols-2">
                <input  className="m-2 p-2 border " type="text" placeholder="First Name" />
                <input  className="m-2 p-2 border " type="text" placeholder="Last Name" />
                <input className="m-2 p-2 border "  type="email" placeholder="Email" />
                <input  className="m-2 p-2 border " type="tel" placeholder="Phone " />
                <input className="m-2 p-2 border col-span-2"type="text" placeholder="Address" />
                <textarea className="col-span-2 p-2 m-2 border" id="" cols="30" rows="5" placeholder="Message"></textarea>
                <button className="col-span-2 p-2 m-2" >Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
