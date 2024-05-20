import React from "react";
import { SiPersonio } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiOnlyoffice } from "react-icons/si";
const skillsData = [
    {
        name: "Exclusive Porsche Fleet",
        icon: (React.createElement(SiPersonio, { className: "text-5xl text-primary group-hover:text-black duration-300" })),
        link: "#",
        description: "Drive high-performance, luxury Porsches.",
        aosDelay: "0",
    },
    {
        name: "Personalized Service",
        icon: (React.createElement(RiCustomerService2Line, { className: "text-5xl text-primary group-hover:text-black duration-300" })),
        link: "#",
        description: "Enjoy tailored, concierge-level support.",
        aosDelay: "500",
    },
    {
        name: "Unmatched Prestige",
        icon: (React.createElement(SiOnlyoffice, { className: "text-5xl text-primary group-hover:text-black duration-300" })),
        link: "#",
        description: "Experience the status and thrill of Porsche driving.",
        aosDelay: "1000",
    },
];
const Services = () => {
    return (React.createElement("div", { className: "py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("div", { className: "pb-12" },
                React.createElement("h1", { className: "text-3xl font-semibold text-center font-serif sm:text-4xl" }, "Why choose us")),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" }, skillsData.map((skill) => (React.createElement("div", { key: skill.name, "data-aos": "fade-up", "data-aos-delay": skill.aosDelay, className: "card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg" },
                React.createElement("div", { className: "grid place-items-center" }, skill.icon),
                React.createElement("h1", null, skill.name),
                React.createElement("p", null, skill.description),
                React.createElement("a", { href: skill.link, className: "inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300" }, "Learn more"))))))));
};
export default Services;
