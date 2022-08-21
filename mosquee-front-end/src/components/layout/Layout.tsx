import React from "react";
import "./layout.css";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

type Props = {
    children?: React.ReactNode;
};

function Layout({children}: Props){

    return (
        <div>
            {/* header  */}
             <Navbar /> 

            {/* body */}
            <div>
                {children}
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Layout;