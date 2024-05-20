import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
export const Navlinks = [
    {
        id: 1,
        name: "HOME",
        link: "#home",
    },
    {
        id: 2,
        name: "CARS",
        link: "#cars",
    },
    {
        id: 1,
        name: "ABOUT",
        link: "#about",
    },
    {
        id: 1,
        name: "BOOKING",
        link: "/#booking",
    },
];
const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (React.createElement("div", { className: "relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300\r\n    " },
        React.createElement("div", { className: "container py-2 md:py-0" },
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("div", null,
                    React.createElement("span", { className: "text-3xl font-bold font-serif" }, "Car Rental")),
                React.createElement("nav", { className: "hidden md:block" },
                    React.createElement("ul", { className: "flex items-center gap-8" },
                        Navlinks.map(({ id, name, link }) => (React.createElement("li", { key: id, className: "py-4" },
                            React.createElement("a", { href: link, className: " text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  " }, name)))),
                        theme === "dark" ? (React.createElement(BiSolidSun, { onClick: () => setTheme("light"), className: "text-2xl" })) : (React.createElement(BiSolidMoon, { onClick: () => setTheme("dark"), className: "text-2xl" })))),
                React.createElement("div", { className: "flex items-center gap-4 md:hidden " },
                    theme === "dark" ? (React.createElement(BiSolidSun, { onClick: () => setTheme("light"), className: "text-2xl" })) : (React.createElement(BiSolidMoon, { onClick: () => setTheme("dark"), className: "text-2xl" })),
                    showMenu ? (React.createElement(HiMenuAlt1, { onClick: toggleMenu, className: " cursor-pointer transition-all", size: 30 })) : (React.createElement(HiMenuAlt3, { onClick: toggleMenu, className: "cursor-pointer transition-all", size: 30 }))))),
        React.createElement(ResponsiveMenu, { showMenu: showMenu, toggleMenu: toggleMenu })));
};
export default Navbar;
