import React from 'react';
import Navbar from "./sections/Navbar";
import Masthead from "./sections/Masthead";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Modals from "./components/Modals";
import Expertise from "./sections/Expertise";

const App = () => {
    return (
        <div id="page-top">
            <Navbar />
            <Masthead />
            <Portfolio />
            <About />
            <Expertise />
            <Footer />
            <Modals />
        </div>
    );
}

export default App;