import React from 'react';
import Navbar from "./sections/Navbar";
import Contents from "./Contents";
import Footer from "./sections/Footer";

const App = () => {
    return (
        <div id="page-top">
            <Navbar />
            <Contents />
            <Footer />
        </div>
    );
}

export default App;