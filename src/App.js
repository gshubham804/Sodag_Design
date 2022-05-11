import logo from './logo.svg';
import './App.css';
import Contact from './Component/Contact'
import Footerupdate from './Component/footerupdate'
import Navbar from './Component/Navbar';
import Sodagall from './Component/Sodagall';
import SodagallSlider from './Component/SodagallSlider';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from './Component/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar/> 
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/about" exact element={<About />} />
    <Route path="/home" exact element={<Home />} />
    <Route path="/sodagall" exact element={<Sodagall />} />
    <Route path="/contact" exact element={<Contact />} />
    </Routes>
    <Footerupdate/> 
    </Router>
    {/* <SodagallSlider/>
    <Sodagall/>
    
     */}
    </>
  );
}

export default App;
