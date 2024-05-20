import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";
const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
    return (React.createElement("div", { className: `${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md` },
        React.createElement("div", { className: "card" },
            React.createElement("div", { className: "flex items-center justify-start gap-3" },
                React.createElement(FaUserCircle, { size: 50 }),
                React.createElement("div", null,
                    React.createElement("h1", null, "Hello User"),
                    React.createElement("h1", { className: "text-sm text-slate-500" }, "Premium user"))),
            React.createElement("nav", { className: "mt-12" },
                React.createElement("ul", { className: "space-y-4 text-xl" }, Navlinks.map(({ id, name, link }) => (React.createElement("li", { key: id },
                    React.createElement("a", { href: link, className: "mb-5 inline-block", onClick: toggleMenu }, name))))))),
        React.createElement("div", { className: "footer" },
            React.createElement("h1", null,
                "Thanks ",
                React.createElement("a", { href: "#" }, "Thank you"),
                " "))));
};
export default ResponsiveMenu;
