import { lazy, Suspense } from "react";
const Header = lazy(() => import("./components/header"));
const Hero = lazy(() => import("./components/hero"));
const Footer = lazy(() => import("./components/footer"));
const Services = lazy(() => import("./components/services"));
const About = lazy(() => import("./components/about"));
const WhyUs = lazy(() => import("./components/whyUs"));

function App() {
    return (
        <Suspense fallback={<p>Loading ...</p>}>
            <main className="root">
                <Header />
                <Hero />
                <About />
                <WhyUs />
                <Services />
                <Footer />
            </main>
        </Suspense>
    );
}

export default App;
