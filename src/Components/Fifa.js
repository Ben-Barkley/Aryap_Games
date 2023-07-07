import React, {useRef, useEffect} from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import stadium2 from '../image/stadium2.jpg'
import fifa8 from '../image/fifa8.jpg'
import backg3f from '../image/backg3f.jfif'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'
import fifa9 from '../image/fifa9.png'
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import video
import ReactPlayer from 'react-player';

function Fifa() {

  useEffect(() => {
    AOS.init();
  }, [])

  const playerRef = useRef(null);
  return (
   
    <section id='fifa'>

      <h1 class="section-title-01">EA Sports</h1>
      <h1 class="section-title-02">FIFA 23</h1>

      
    <div className="fifa_card">
    <Carousel slide={false}>
   
   <Carousel.Item  >
     {/* <img
       className=""
       src={backg3f}
      
       alt="First slide"
     /> */}

      <ReactPlayer ref={playerRef} url={`https://www.youtube.com/watch?v=DYExzVzmOEQ&t=4s`} controls={true}  autoPlay="true" width="50%" height="50vh" style={{marginLeft: "20em"}} />
    


     <Carousel.Caption>
       <h3>Free to play</h3>
       
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className=""
       src={stadium2}
       alt="Second slide"
     />

     <Carousel.Caption>
       
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className=""
       src={fifa8}
       alt="Third slide"
     />

     <Carousel.Caption>
       
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
    </div>

    {/* FIFA MOD */}
    <div className="fifa_mod">



<div className="patch_img">
  <img src={fifa9} alt="" />
</div>

<div className="patch_text">
  <h4>EEP Squad Update 23/24:</h4>
  <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Updated Summer Transfers</ul>
  <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Leagues promotion and relegation</ul>
  <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Players rating</ul>
  <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  National teams updated</ul>
  <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Improved rating for youngsters in Career Mode</ul>
  <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Updated game plans</ul>  
</div>
</div>

<div className="fifa_button">
<Button style={{width: '10em', border:'none' , marginLeft: '40em', marginBottom: "30px" }} variant="" >Download</Button>
</div>

   
    </section>
  );
}

export default Fifa;


