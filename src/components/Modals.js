import React from 'react';
import ProjectModal from "./ProjectModal";

import sports_store from '../assets/portfolio/sports-store.png'
import endurance from '../assets/portfolio/endurance.png'
import resurgence from '../assets/portfolio/resurgence.png'
import genesis from '../assets/portfolio/genesis.png'
import novel_infinite from '../assets/portfolio/novel-infinite.png'

const Modals = () => {
    return (
        <>
            <ProjectModal id="sports-store" title="Sport Store" image={sports_store} content={
                <>
                    <p>A Sports Store application that is built using ASP.NET Core MVC, Razor Pages, Blazor Server, SQL Server. My First Major ASP.NET Core Project</p>
                    <span className={"rounded-pill px-3 py-2 text-uppercase"} style={{backgroundColor: '#f5d142'}}><b>Personal Project</b></span>
                </>
            } githubLink="https://github.com/Sathiyaraman-M/SportsStore" demoLink={"https://sports-store.sathiyaraman-m.com/"} />
            <ProjectModal id="endurance" title="Library Management System" image={endurance} content={
                <>
                    <i><b>Code Name: </b> Endurance</i>
                    <br/>
                    <p>A Library Management System completely built on .NET using Blazor WebAssembly, ASP.NET Core, SQL Server. Features excellent Authentication and fine-grained Authorization mechanisms and tight validation features.</p>
                    <span className={"rounded-pill px-3 py-2 text-uppercase"} style={{backgroundColor: '#f5d142'}}><b>Personal Project</b></span>
                </>
            } githubLink="https://github.com/Sathiyaraman-M/Endurance" demoLink={"https://endurance.sathiyaraman-m.com/"} />
            <ProjectModal id="fluid" title="Hardware Assets Inventory" image={genesis} content={
                <>
                    <i><b>Code Name: </b> Resurgence</i>
                    <br/>
                    <p>A Hardware Assets Inventory application, capable of tracking hardware components change, again fully built on .NET using Blazor WebAssembly, ASP.NET Core, SQL Server. Built as a part of <b>Smart India Hackathon 2022</b>.</p>
                    <span className={"rounded-pill px-3 py-2 text-uppercase"} style={{backgroundColor: '#f5d142'}}><b>Hackathon Project</b></span>
                </>
            } githubLink="https://github.com/Sathiyaraman-M/Assets_Inventory" />
            <ProjectModal id="resurgence" title="Visitor Management System" image={resurgence} content={
                <>
                    <i><b>Code Name: </b> Resurgence</i>
                    <br/>
                    <p>A Proper Visitor Management System, that tracks visitors in/out using Visitor passes, again fully built on .NET using Blazor WebAssembly, ASP.NET Core, SQL Server. This project is currently in production.</p>
                    <span className={"rounded-pill px-3 py-2 text-uppercase"} style={{backgroundColor: '#f5d142'}}><b>Professional Project</b></span>
                </>
            } />
            <ProjectModal id="genesis" title="Self-Service Customer Portal" image={genesis} content={
                <>
                    <i><b>Code Name: </b> Genesis</i>
                    <br/>
                    <p>
                        A Portal application for viewing Transport Status in a Supply-chain company, built using Blazor WebAssembly, ASP.NET Core, MySQL. This project is also currently in production.
                        <br/>
                        <b className={"text-uppercase"}>Professional Project, done as part of Internship at <em>Apollo Supply Chain Pvt. Ltd.</em></b>
                    </p>
                    <span className={"rounded-pill px-3 py-2 text-uppercase"} style={{backgroundColor: '#f5d142'}}><b>Professional Internship Project</b></span>
                </>
            } />
            <ProjectModal id="infinite" title="Novel Infinite" image={novel_infinite} content={
                <>
                    <i><b>Code Name: </b> Novel Infinite</i>
                    <br/>
                    <p>An Online Social Platform to share projects and blogs, again fully built on .NET using Blazor WebAssembly, ASP.NET Core, SQL Server.</p>
                    <span className={"rounded-pill px-3 py-2 text-uppercase"} style={{backgroundColor: '#f5d142'}}><b>Personal Project</b></span>
                </>
            } githubLink="https://github.com/Sathiyaraman-M/Infinite_M2" demoLink={"https://novel-infinite.sathiyaraman-m.com/"} />
            {/*<ProjectModal id="portfolio-react" title="ProjectSection Site" image={submarine} content={*/}
            {/*    <p>The Site currently you are seeing, is my ProjectSection site, also my first ReactJS project.</p>*/}
            {/*} githubLink="https://github.com/Sathiyaraman-M/PortfolioSite" />*/}
    </>
    );
};

export default Modals;