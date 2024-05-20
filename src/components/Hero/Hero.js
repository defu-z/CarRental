import React, { useEffect } from 'react';
import carPng from '../../assets/images/suv.jpg';
import yellow from '../../assets/images/Yellow.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported
const Hero = ({ theme }) => {
    useEffect(() => {
        AOS.refresh();
    });
    return (React.createElement("div", { id: "home", className: "dark:bg-black dark:text-white duration-300 " },
        React.createElement("div", { className: "container min-h-[620px] flex" },
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 place-items-center" },
                React.createElement("div", { "data-aos": "zoom-in", "data-aos-duration": "1500", "data-aos-once": "false", className: "order-1 sm:order-2" },
                    React.createElement("img", { src: theme === "dark" ? carPng : yellow, alt: "", className: "sm:scale-125 relative -z-10 max-h-[600px] ]" })),
                React.createElement("div", { className: "space-y-5 order-2 sm:order-1 sm:pr-32 " },
                    React.createElement("p", { "data-aos": "fade-up", className: "text-primary text-2xl font-serif" }, "PorrschePass"),
                    React.createElement("h1", { "data-aos": "fade-up", "data-aos-delay": "600", className: "text-5xl lg:text-7xl font-semibold font-serif" }, "Car Rental"),
                    React.createElement("p", { "data-aos": "fade-up", "data-aos-delay": "1000" }, "PorschePass: Your gateway to luxury driving. Experience the thrill of Porsche's iconic lineup, from the classic 911 to the innovative Taycan. Elevate any occasion with our seamless rental process and exceptional service."),
                    React.createElement("br", null),
                    React.createElement("button", { "data-aos": "fade-up", "data-aos-delay": "1500", onClick: () => {
                            AOS.refreshHard();
                        }, className: "rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black" }, "Get Started"))))));
};
export default Hero;
