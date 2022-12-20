import PageHeader from "../components/PageHeader";
import ProjectSection from "../sections/ProjectSection";
import Modals from "../components/Modals";

const Projects = () => {
    return (
        <>
            <PageHeader pagetitle={"Projects"} />
            <ProjectSection />
            <Modals />
        </>
    );
}

export default Projects;