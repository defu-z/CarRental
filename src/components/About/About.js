import React from 'react';
import Carimg from "../../assets/images/BottomAbout.png";
import AboutDark from "../../assets/images/YellowAbout.jpg";
const About = ({ theme }) => {
    return (React.createElement("div", { id: "about", className: 'dark:bg-black bg-slate-100\r\n    dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'grid grid-cols-lsm:\r\n          grid-cols-2 place-items-center' },
                React.createElement("div", { "data-aos": "slide-right", "data-aos-duration": "1500" },
                    React.createElement("img", { src: theme === "dark" ? Carimg : AboutDark, alt: "", className: "relative -z-10 max-h-[200px] sm:scale-125\r\n                    " })),
                React.createElement("div", null,
                    React.createElement("h1", { "data-aos": "fade-up", "data-aos-delay": "600", className: "text-primary text-2xl font-serif" }, "About us"),
                    React.createElement("p", { "data-aos": "fade-up", "data-aos-delay": "1000" }, "\"PorschePass: Your premier destination for luxury car rentals. We offer competitive prices and exceptional service, ensuring every drive is unforgettable. Experience the thrill of Porsche without compromise.\""),
                    React.createElement("p", { "data-aos": "fade-up", "data-aos-delay": "1000" }, "Premium car rental for reasonable price at PorschePass."),
                    React.createElement("a", { href: "#cars" },
                        React.createElement("button", { "data-aos": "fade-up", "data-aos-duration": "1500", className: "btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300" }, "Get Started")))))));
};
export default About;
