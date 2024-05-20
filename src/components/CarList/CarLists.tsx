import React from "react";
import car718 from "../../assets/images/718-cayman.jpg";
import car911 from "../../assets/images/911-turbo.jpg";
import carTaycan from "../../assets/images/taycan.jpg";
import carPanamera from "../../assets/images/panamera.jpg";
import carMacan from "../../assets/images/macan.jpg";
import carCayenne from "../../assets/images/cayenne.jpg";
import '../../index.css';


const CarListData = [
    {
        name:"718",
        price:'150',
        image: car718,
        aosDelay:"0",
    },
    {
        name:"911",
        price:'250',
        image: car911,
        aosDelay:"0",
    },
    {
        name:"Taycan",
        price:'350',
        image: carTaycan,
        aosDelay:"0",
    },
    {
        name:"Panamena",
        price:'250',
        image: carPanamera,
        aosDelay:"0",
    },
    {
        name:"Macan",
        price:'300',
        image: carMacan,
        aosDelay:"0",
    },
    {
        name:"Cayenne",
        price:'500',
        image: carCayenne,
        aosDelay:"0",
    },
    

]

const CarLists = () => {
    
    function handleDetailsClick(name: string): void {
        throw new Error("Function not implemented.");
    }

    return( 
      <div id="cars" className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
            <div className="container">
                <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">Lorem</h1>
                <p data-aos="fade-up" className="text-sm pb-10">What is the thing</p>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                        {CarListData.map((car) => (
                            <div
                                key={car.name}
                                data-aos="fade-up"
                                data-aos-duration="300"
                                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                            >
                                <div className="w-full h-[120px]">
                                    <img className="w-full h-[120px] object-contain sm:translate-x-2 group-hover:sm:translate-x-4 duration-700" src={car.image} alt={car.name} />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-primary font-semibold font-brush-script text-2xl">{car.name}</h1>
                                </div>
                                <div className="flex justify-between items-center text-xl font-semibold">
                                    <p>CAD${car.price}/Day</p>
                                    <a href="#footer">
                                    <button className="text-primary underline">Details</button>
                                    </a>
                                </div>
                           <p className="texl-xl font-semibold absolute top-0 left-3"> 
                            12Km
                           </p>
                            
                        </div>
                        
                    ))}
                </div>
            </div>
            <div className="grid place-content-center mt-8" >
                <a href="#cars">
                                <button 
                                data-aos="fade-up"
                                
                                className="button-outline">
                                    Get Started
                                </button>
                </a>
            </div>
        </div>
    </div>
        )
}

export default CarLists;