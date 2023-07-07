import React, {useRef, useEffect} from 'react'
import './Style.css'

import Carousel from 'react-bootstrap/Carousel';
import stadium2 from '../image/stadium2.jpg'
import pes2 from '../image/pes2.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import pes1 from '../image/pes1.jpeg'
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Fifa() {

  useEffect(() => {
    AOS.init();
  }, [])

  const playerRef = useRef(null);
  return (
   
    <section id='pes'>

      <h1 class="section-title-01">Konami</h1>
      <h1 class="section-title-02" >Efootball</h1>

      
    <div className="pes_patch">
         <div className="pes_details">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
            <div class="card " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <img src={pes2} alt="" />
            <div className="pes_button">
                <Button>View Here</Button>
             </div>
            </div>
  </div>
            <div class="col">
            <div class="card " data-aos="fade-left"
     data-aos-offset="300"
     data-aos-duration="300">
            <img src={pes1} alt="" />
            <div className="pes_button">
            <Button>View Here</Button>
             </div>
            </div>
            </div>
             
        </div>

      
    </div>
    
    
    </div>
    <div className="football_life_update">
    <h3>Football Life 23/24 Summer Transfer Update</h3>
  </div>
    

    {/* FOOTBALL LIFE MODE */}
    <div className="pes_summary">


            <div className="patch_text">
            <h4>Update Summary 23/24:</h4>
            <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Updated Summer Transfers </ul>
            <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Players rating</ul>
            <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  National teams updated</ul>
            <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Updated Game Plans</ul>
            <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Improved rating for youngsters in Master League</ul>  
            <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Fixed players postions to align with formation</ul>
            <ul>  <i><FontAwesomeIcon icon={faMicrophone} color="rgb(199, 5, 37)"/> </i>  Compatible with update 1.0 of FL</ul>
            </div>
            
    
            <div className="patch_img" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img src={pes1} alt="" />
            </div>
</div>

<div className="pes_button" data-aos="fade-down" data-aos-duration="2000">
<Button style={{width: '10em', border:'none' ,  marginBottom: "30px" }} variant="" >Download</Button>
</div>

   
    </section>
  );
}

export default Fifa;


