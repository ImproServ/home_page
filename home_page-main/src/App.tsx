import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Services from "./components/services";
import About from "./components/about";
import WhyUs from "./components/whyUs";

function App() {
    return (
        <main className="root">
            <Header />
            <Hero />
            <About />
            <WhyUs />
            <Services />
            <Footer />
        </main>
    );
}

export default App;
