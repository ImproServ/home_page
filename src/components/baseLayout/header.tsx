import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { BsListNested } from "react-icons/bs";
import logo from "../../assets/logo-circle-dark.svg";

const Header = () => {
    const [toggleNavigation, setToggleNavigation] = useState<boolean>(false);

    const navigationLinks = [
        { text: "Home", link: "#" },
        { text: "About", link: "#about" },
        { text: "Why Us", link: "#whyus" },
        { text: "Services", link: "#services" },
    ];

    return (
        <header className="p-4">
            <div className="container flex items-center justify-between">
                <section className="flex justify-center items-center gap-2 group">
                    <img src={logo} alt="logo" loading="lazy" className="w-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
                    <h3>
                        <span className="text-primary-light">I</span>mpro
                        <span className="text-primary-light">S</span>erv
                    </h3>
                </section>
                <nav className="hidden sm:flex items-center justify-center gap-4">
                    {navigationLinks.map(({ link, text }, idx) => (
                        <a href={link} className="navlink_desktop" key={idx}>
                            {text}
                        </a>
                    ))}
                </nav>
                <BsListNested size={30} className="sm:hidden cursor-pointer" onClick={() => setToggleNavigation(true)} />
            </div>
            <nav
                className={`drop-shadow-xl bg-[rgba(255,255,255,0.2)] backdrop-blur-2xl max-w-[17rem] p-4 w-full fixed z-10 inset-0 left-auto transition-all duration-300 origin-right flex flex-col gap-2 ${
                    toggleNavigation ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
                onClick={() => setToggleNavigation(false)}
            >
                <ImCancelCircle size={30} className="ml-auto mb-4 cursor-pointer" />
                {navigationLinks.map(({ link, text }, idx) => (
                    <a href={link} className="navlink_phone" key={idx}>
                        {text}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
