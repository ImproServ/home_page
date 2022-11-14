import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default BaseLayout;
