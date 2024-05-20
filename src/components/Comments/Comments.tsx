import React from 'react';
import { FaUserCircle, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons


const CommentsData= [

    {
        name: "John Doe",
        feedback: "Excellent service and top-notch Porsches! Highly recommended.",
        rating: 5,
        icon: (
            <FaUserCircle className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        aosDelay: "0",
    },
    {
        name: "Jane Smith",
        feedback: "The personalized service made my rental experience unforgettable.",
        rating: 4,
        icon: (
            <FaUserCircle className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        aosDelay: "500",
    },
    {
        name: "Michael Brown",
        feedback: "Driving a Porsche was a dream come true. Amazing cars and service!",
        rating: 5,
        icon: (
            <FaUserCircle className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        aosDelay: "1000",
    },

]

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex justify-center">
            {Array(fullStars).fill(<FaStar className="text-yellow-500" />)}
            {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
            {Array(emptyStars).fill(<FaRegStar className="text-yellow-500" />)}
        </div>
    );
};

const Comments = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
        <div className="container">
            {/* {header} */}
            <div>
                <p className='text-3xl font-semibold text-center sm:text-4xl font-serif'>Clients Experiments</p>
                <p
                data-aos="fade-up"
                className='text-center sm:px-44'>Bollshit</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 text-black dark:text-white'>
                {
                    CommentsData.map((data)=>{
                        return(
                            <div key={data.name}
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg">

                            <div className="flex items-center space-x-2 justify-center">
                                {data.icon}
                                <span className="text-xl font-bold">{data.name}</span>
                            </div>
                            {renderStars(data.rating)}
                            <p>{data.feedback}</p>
                            </div>
                        )
                    })
                }
            </div>
            {/* Leave Your Comments Section */}
            {/* <div className="mt-8 text-center">
                    <p className="text-2xl font-semibold">Leave Your Comments</p>
                    <textarea
                        className="w-full mt-4 p-2 rounded border border-gray-300"
                        placeholder="Your comments..."
                    ></textarea>
                    <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-black duration-300">
                        Submit
                    </button>
                </div> */}


        </div>
    </div>
  )
}

export default Comments