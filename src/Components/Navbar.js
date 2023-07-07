import React, {useEffect} from 'react'
// import Container from 'react-bootstrap/Container';

import './Style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faGamepad, faHome, faTimes} from '@fortawesome/free-solid-svg-icons'
// import {faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import backg2p from '../image/backg2p.png'
// import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';




function Navbar() {
  useEffect(() => {
    AOS.init();
  }, [])

  const handleClick = (e) => {
    const open = document.querySelector('#open');
    const close = document.querySelector('#close');
    const container = document.querySelector(".container");

     open.addEventListener("click", () =>
  container.classList.add("show-nav"));
  
  close.addEventListener("click", () =>
  container.classList.remove("show-nav")); 

  console.log('clicked')
  
  }

 



  return (
   <section>
              <div className="container">

                              <div className="circle-container">
                                <div className="circle">
                                  <button id='close' onClick={handleClick}>
                                    <i><FontAwesomeIcon icon={faTimes} color="rgb(199, 5, 37)"/> </i> 
                                  </button>

                                  <button id='open'  onClick={handleClick}>
                                    <i><FontAwesomeIcon icon={faBars} color="rgb(199, 5, 37)"/> </i> 
                                  </button>
                                </div>
                              </div>


                                        {/* body content */}
                                        
                                      <div className="content">
                                        <h1 data-aos="fade-right" data-aos-duration="3000">Welcome To AryaP Games</h1>
                                        <p>explore your favourites football games here</p>

                                        <div className="hero_img" data-aos="flip-left" data-aos-duration="3000">
                                        <img src={backg2p} alt="" />
                                        </div>
                                          
                                          
                                      </div>
                                  
                                        {/* navigation links */}

    <nav>
      <ul>
        <li style={{color: 'white', fontWeight:'500'}}> Home <i><FontAwesomeIcon icon={faHome} color="rgb(199, 5, 37)" style={{marginLeft: '4px'}}  /> </i> </li>
        <li style={{color: 'white', fontWeight:'500'}}> Pes<i><FontAwesomeIcon icon={faGamepad} color="rgb(199, 5, 37)" style={{marginLeft: '20px'}}  /> </i></li>
        <li style={{color: 'white', fontWeight:'500'}}> Fifa<i><FontAwesomeIcon icon={faGamepad} color="rgb(199, 5, 37)"style={{marginLeft: '15px'}}  /> </i></li>
       
      </ul>
    </nav>

    </div>


   </section>
    
    
    
  
    

   
  )
}

export default Navbar







