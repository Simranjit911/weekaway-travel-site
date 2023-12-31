import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallary/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
