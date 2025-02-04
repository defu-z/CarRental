import React, { useEffect } from 'react';
import Navbar from './components/Navbars/Navbar';
import Hero from './components/Hero/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About/About';
import Services from './components/Services/Services';
import CarLists from './components/CarList/CarLists';
import Comments from './components/Comments/Comments';
import { AppStore } from './components/AppStores/AppStore';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
    //Dark Mode Feature
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") ?
        localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    //Aos initialiazation 
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    return (React.createElement("div", { className: 'bg-white dark:bg-black dark:text-white' },
        React.createElement(Navbar, { theme: theme, setTheme: setTheme }),
        React.createElement(Hero, { theme: theme }),
        React.createElement(About, { theme: theme }),
        React.createElement(Services, null),
        React.createElement(CarLists, null),
        React.createElement(Comments, null),
        React.createElement(AppStore, null),
        React.createElement(Contact, null),
        React.createElement(Footer, null)));
};
export default App;
