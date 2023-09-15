
import bg from "../assets/bg-2.mp4"
const Hero = () => {
  return (
    <div className='w-full h-[90vh] bg-black'>
            <video src={bg} autoPlay loop muted className='w-full h-full object-cover bg-black'/>
        
    <div className='max-w-[1140px] m-auto '>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4' >
            <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='font-bold text-4xl italic'>With WeekAway</h2>
            <p className='text-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis totam quidem voluptates minima, tempora vitae numquam ipsa sapiente deleniti sunt iusto culpa obcaecati sed necessitatibus iure laboriosam magnam incidunt! Ut.</p>
        </div>
    </div>

    </div>
  )
}

export default Hero