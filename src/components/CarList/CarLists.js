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
        name: "718",
        price: '150',
        image: car718,
        aosDelay: "0",
    },
    {
        name: "911",
        price: '250',
        image: car911,
        aosDelay: "0",
    },
    {
        name: "Taycan",
        price: '350',
        image: carTaycan,
        aosDelay: "0",
    },
    {
        name: "Panamena",
        price: '250',
        image: carPanamera,
        aosDelay: "0",
    },
    {
        name: "Macan",
        price: '300',
        image: carMacan,
        aosDelay: "0",
    },
    {
        name: "Cayenne",
        price: '500',
        image: carCayenne,
        aosDelay: "0",
    },
];
const CarLists = () => {
    function handleDetailsClick(name) {
        throw new Error("Function not implemented.");
    }
    return (React.createElement("div", { id: "cars", className: "pb-24 pt-12 bg-white dark:bg-dark dark:text-white" },
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "text-3xl sm:text-4xl font-semibold font-serif mb-3" }, "Lorem"),
            React.createElement("p", { "data-aos": "fade-up", className: "text-sm pb-10" }, "What is the thing"),
            React.createElement("div", null,
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16" }, CarListData.map((car) => (React.createElement("div", { key: car.name, "data-aos": "fade-up", "data-aos-duration": "300", className: "space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group" },
                    React.createElement("div", { className: "w-full h-[120px]" },
                        React.createElement("img", { className: "w-full h-[120px] object-contain sm:translate-x-2 group-hover:sm:translate-x-4 duration-700", src: car.image, alt: car.name })),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement("h1", { className: "text-primary font-semibold font-brush-script text-2xl" }, car.name)),
                    React.createElement("div", { className: "flex justify-between items-center text-xl font-semibold" },
                        React.createElement("p", null,
                            "CAD$",
                            car.price,
                            "/Day"),
                        React.createElement("a", { href: "#footer" },
                            React.createElement("button", { className: "text-primary underline" }, "Details"))),
                    React.createElement("p", { className: "texl-xl font-semibold absolute top-0 left-3" }, "12Km")))))),
            React.createElement("div", { className: "grid place-content-center mt-8" },
                React.createElement("a", { href: "#cars" },
                    React.createElement("button", { "data-aos": "fade-up", className: "button-outline" }, "Get Started"))))));
};
export default CarLists;
