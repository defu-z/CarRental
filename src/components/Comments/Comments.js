import React from 'react';
import { FaUserCircle, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons
const CommentsData = [
    {
        name: "John Doe",
        feedback: "Excellent service and top-notch Porsches! Highly recommended.",
        rating: 5,
        icon: (React.createElement(FaUserCircle, { className: "text-5xl text-primary group-hover:text-black duration-300" })),
        aosDelay: "0",
    },
    {
        name: "Jane Smith",
        feedback: "The personalized service made my rental experience unforgettable.",
        rating: 4,
        icon: (React.createElement(FaUserCircle, { className: "text-5xl text-primary group-hover:text-black duration-300" })),
        aosDelay: "500",
    },
    {
        name: "Michael Brown",
        feedback: "Driving a Porsche was a dream come true. Amazing cars and service!",
        rating: 5,
        icon: (React.createElement(FaUserCircle, { className: "text-5xl text-primary group-hover:text-black duration-300" })),
        aosDelay: "1000",
    },
];
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (React.createElement("div", { className: "flex justify-center" },
        Array(fullStars).fill(React.createElement(FaStar, { className: "text-yellow-500" })),
        halfStar && React.createElement(FaStarHalfAlt, { className: "text-yellow-500" }),
        Array(emptyStars).fill(React.createElement(FaRegStar, { className: "text-yellow-500" }))));
};
const Comments = () => {
    return (React.createElement("div", { className: 'dark:bg-black dark:text-white py-14 sm:pb-24' },
        React.createElement("div", { className: "container" },
            React.createElement("div", null,
                React.createElement("p", { className: 'text-3xl font-semibold text-center sm:text-4xl font-serif' }, "Clients Experiments"),
                React.createElement("p", { "data-aos": "fade-up", className: 'text-center sm:px-44' }, "Bollshit")),
            React.createElement("div", { className: 'grid grid-cols-1 sm:grid-cols-2 gap-8 text-black dark:text-white' }, CommentsData.map((data) => {
                return (React.createElement("div", { key: data.name, "data-aos": "fade-up", "data-aos-delay": data.aosDelay, className: "card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg" },
                    React.createElement("div", { className: "flex items-center space-x-2 justify-center" },
                        data.icon,
                        React.createElement("span", { className: "text-xl font-bold" }, data.name)),
                    renderStars(data.rating),
                    React.createElement("p", null, data.feedback)));
            })))));
};
export default Comments;
