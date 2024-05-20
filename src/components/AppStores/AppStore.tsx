import React from 'react';
import pattern from "../../assets/images/pattern.jpg";
import PlayStoreImg from "../../assets/images/play_store.png";
import AppStoreImg from "../../assets/images/app_store.png";
const bannerImg = {
    backgroundImage:`url(${pattern})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
}

export const AppStore = () => {
  return (
    <div className="container pb-14">
        <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center
        rounded-xl'
        style={bannerImg}
        >
        
            <div>
                <h1 
                data-aos="fade-up"
                className='text-2xl text-center sm:text-4xl font-semibold font-serif'>Get Started with our app</h1>
                <p 
                data-aos = "fade-up"
                className='text-center sm:px-20'>Noapp Yet </p>
                <div 
                data-aos = "fade-up"
                className='flex felx-warp justify-venter items-center gap-4'>
                    <a href = "#">
                        <img src={PlayStoreImg} alt=""
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                    <a href = "#">
                        <img src={AppStoreImg} alt=""
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>   
                </div>
            </div>
        </div>
    </div>
  )
}
