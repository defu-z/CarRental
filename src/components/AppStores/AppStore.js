import React from 'react';
import pattern from "../../assets/images/pattern.jpg";
import PlayStoreImg from "../../assets/images/play_store.png";
import AppStoreImg from "../../assets/images/app_store.png";
const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
};
export const AppStore = () => {
    return (React.createElement("div", { className: "container pb-14" },
        React.createElement("div", { className: 'text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center\r\n        rounded-xl', style: bannerImg },
            React.createElement("div", null,
                React.createElement("h1", { "data-aos": "fade-up", className: 'text-2xl text-center sm:text-4xl font-semibold font-serif' }, "Get Started with our app"),
                React.createElement("p", { "data-aos": "fade-up", className: 'text-center sm:px-20' }, "Noapp Yet "),
                React.createElement("div", { "data-aos": "fade-up", className: 'flex felx-warp justify-venter items-center gap-4' },
                    React.createElement("a", { href: "#" },
                        React.createElement("img", { src: PlayStoreImg, alt: "", className: 'max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' })),
                    React.createElement("a", { href: "#" },
                        React.createElement("img", { src: AppStoreImg, alt: "", className: 'max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' })))))));
};
