import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/error";
import Loading from "./components/loading";
const Home = lazy(() => import("./components/home"));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <main className="root">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </Suspense>
    );
}

export default App;
