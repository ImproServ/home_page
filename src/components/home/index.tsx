import Hero from "./hero";
import Services from "./services";
import About from "./about";
import WhyUs from "./whyUs";
import BaseLayout from "../baseLayout";

const Home = () => {
    return (
        <BaseLayout>
            <Hero />
            <About />
            <WhyUs />
            <Services />
        </BaseLayout>
    );
};

export default Home;
