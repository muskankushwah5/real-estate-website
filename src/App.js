import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import Video from './components/Video';
import AboutOwner from './components/AboutOwner';
import AboutUs from './components/AboutUs';
import SliderProjects from './components/SliderProjects';
import BigCarousel from './components/HomeSlider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#272727"}}>
    <div style={{marginTop:"2%"}}>
    <Navbar/>
    </div>
      <div style={{height:"100%"}}><BigCarousel/></div>
      <AboutUs/>
      <AboutOwner/>
      <SliderProjects/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
