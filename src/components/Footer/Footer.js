import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Cars",
        link: "/#cars",
    },
];
const Footer = () => {
    return (React.createElement("div", { id: "footer", className: 'bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl' },
        React.createElement("div", { className: "contarner" },
            React.createElement("div", { className: 'grid md:grid-cols-3 py-5' },
                React.createElement("div", { className: 'py-8 px-4' },
                    React.createElement("h1", { className: 'text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center' }, "Car Rental"),
                    React.createElement("p", null, "Lorem "),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'flex items-center gap-3 ' },
                        React.createElement(FaLocationArrow, null),
                        React.createElement("p", null, "London, On")),
                    React.createElement("div", { className: 'flex items-center gap-3 ' },
                        React.createElement(FaMobileAlt, null),
                        React.createElement("p", null, "+1 (226) 919-5326")),
                    React.createElement("div", { className: 'flex items-center gap-3 mt-6' },
                        React.createElement("a", { href: "#" },
                            React.createElement(FaInstagram, { className: 'text-3xl hover:text-primary duration-300' })),
                        React.createElement("a", { href: "#" },
                            React.createElement(FaFacebook, { className: 'text-3xl hover:text-primary duration-300' })),
                        React.createElement("a", { href: "#" },
                            React.createElement(FaLinkedin, { className: 'text-3xl hover:text-primary duration-300' })))),
                React.createElement("div", { className: 'grid grid-clos-2 sm:grid-cols-3 col-span-2 md:pl-10' },
                    React.createElement("div", null,
                        React.createElement("div", { className: 'py-8 px-4' },
                            React.createElement("h1", { className: 'text-xl  font-bold sm:text-left text-justify mb-3' }, "Important Links"),
                            React.createElement("ul", { className: 'flex flex-col gap-3' }, FooterLinks.map((data) => {
                                return (React.createElement("li", { key: data.link, className: 'cursor-pointer hover:text-primary duration-300' },
                                    React.createElement("span", { className: 'mr-2' }, "\u2B9A"),
                                    React.createElement("a", { href: data.link }, data.title)));
                            })))),
                    React.createElement("div", null,
                        React.createElement("div", { className: 'py-8 px-4' },
                            React.createElement("h1", { className: 'text-xl  font-bold sm:text-left text-justify mb-3' }, "Explore"),
                            React.createElement("ul", { className: 'flex flex-col gap-3' }, FooterLinks.map((data) => {
                                return (React.createElement("li", { key: data.link, className: 'cursor-pointer hover:text-primary duration-300' },
                                    React.createElement("span", { className: 'mr-2' }, "\u2B9A"),
                                    React.createElement("a", { href: data.link }, data.title)));
                            })))),
                    React.createElement("div", null,
                        React.createElement("div", { className: 'py-8 px-4' },
                            React.createElement("h1", { className: 'text-xl  font-bold sm:text-left text-justify mb-3' }, "Connect with Us"),
                            React.createElement("ul", { className: 'flex flex-col gap-3' }, FooterLinks.map((data) => {
                                return (React.createElement("li", { key: data.link, className: 'cursor-pointer hover:text-primary duration-300' },
                                    React.createElement("span", { className: 'mr-2' }, "\u2B9A"),
                                    React.createElement("a", { href: data.link }, data.title)));
                            })))))))));
};
export default Footer;
