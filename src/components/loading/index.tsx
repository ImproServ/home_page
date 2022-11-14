import LoadingImage from "../../assets/logo-circle-dark.svg";

const Loading = () => {
    return (
        <section className="gradient-background min-h-screen flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 md:gap-10 bg-transparent ">
            <h1 className="text-white text-5xl sm:text-7xl md:text-9xl mt-0">Loading</h1>
            <img className="w-16 sm:w-24 md:w-40 rotation" src={LoadingImage} alt={LoadingImage} />
        </section>
    );
};

export default Loading;
