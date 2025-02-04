import React from 'react'
import Carimg from "../../assets/images/BottomAbout.png";
import AboutDark from "../../assets/images/YellowAbout.jpg";


const About = ({theme}) => {
  return (
    <div id="about" className='dark:bg-black bg-slate-100
    dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className='container'>
          <div className='grid grid-cols-lsm:
          grid-cols-2 place-items-center'>
            <div 
            data-aos="slide-right"
            data-aos-duration="1500">
              <img src={theme === "dark"?Carimg : AboutDark}
                    alt=""
                    className="relative -z-10 max-h-[200px] sm:scale-125
                    "
                    />
         
            </div>
            <div>
              <h1 data-aos="fade-up"
                    data-aos-delay="600"
                    className="text-primary text-2xl font-serif">
                About us
              </h1>
              <p data-aos="fade-up"
                    data-aos-delay="1000">"PorschePass: Your premier destination for luxury car rentals. We offer competitive prices and exceptional service, ensuring every drive is unforgettable. Experience the thrill of Porsche without compromise."</p>
              <p data-aos="fade-up"
                    data-aos-delay="1000">
                Premium car rental for reasonable price at PorschePass.
              </p>
              <a href="#cars">
                <button 
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">
                        Get Started
                </button>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
