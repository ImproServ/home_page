import logo from "../../assets/logo-circle-dark.svg";

const Footer = () => {
    return (
        <footer className="p-4 gradient-background">
            <div className="container flex flex-col sm:flex-row items-center justify-between">
                <section className="flex justify-center items-center gap-2 group">
                    <img src={logo} alt="logo" loading="lazy" className="w-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
                    <h3>ImproServ</h3>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
