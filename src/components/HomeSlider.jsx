import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Nasa from "../uploads/nasa.jpg"
const BigCarousel = () => {
  return (
    <div style={{width:"100%",height:"30%"}} >
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        style={{ height: '60vh' }}
      >
        <div style={{backgroundColor:"#272727"}}>
          <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
            <div style={{backgroundColor:"#272727"}}>
            <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
            <div style={{backgroundColor:"#272727"}}>
            <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
            <div style={{backgroundColor:"#272727"}}>
            <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
            <div style={{backgroundColor:"#272727"}}>
            <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
            <div style={{backgroundColor:"#272727"}}>
            <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
            <div style={{backgroundColor:"#272727"}}>
            <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
            <div style={{backgroundColor:"#272727"}}>
            <div style={{backgroundColor:"#272727"}}>
            <img style={{width:"100%",height:"90%"}} src={Nasa}/>
            <p className="legend" style={{backgroundColor:"#272727",marginTop:"40%"}}>Type</p>
            </div>
            </div>
      </Carousel>
    </div>
  );
};

export default BigCarousel;
