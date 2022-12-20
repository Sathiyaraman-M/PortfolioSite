import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Expertise from "./pages/Expertise";
import Blogs from "./pages/Blogs";

const Contents = () => {
    return (
        <Routes>
            <Route path={''} element={<Home />} />
            <Route path={'projects'} element={<Projects />} />
            <Route path={'expertise'} element={<Expertise />} />
            <Route path={'blogs'} element={<Blogs />} />
        </Routes>
    );
}

export default Contents;