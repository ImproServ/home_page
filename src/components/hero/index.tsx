const Hero = () => {
    return (
        <section className="p-4 min-h-[calc(100vh-4.475rem)] flex items-center justify-center">
            <div className="container md:px-8 py-16 md:py-20 flex flex-col lg:flex-row items-center justify-center gap-12">
                <div>
                    <h1 className="text-center mb-6 text-6xl md:text-8xl xl:text-9xl">
                        <span className="text-primary-light">I</span>mpro
                        <span className="text-primary-light">S</span>erv
                    </h1>
                    <h2 className="text-center text-2xl md:text-[2.5rem] leading-[2.8rem]">
                        <span className="block">Improving your Services</span>
                        <span className="text-primary-light">Improving Your Life</span>
                    </h2>
                    <a
                        href="#services"
                        title="button"
                        aria-label="button"
                        className="mt-12 w-fit mx-auto block bg-transparent border-2 py-3 px-6 rounded-md"
                    >
                        Check Our Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
