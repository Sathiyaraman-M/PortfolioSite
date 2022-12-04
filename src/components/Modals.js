import React from 'react';
import PortfolioModal from "./PortfolioModal";

import cabin from '../assets/portfolio/cabin.png'
import cake from '../assets/portfolio/cake.png'
import game from '../assets/portfolio/game.png'

const Modals = () => {
    return (
        <>
            <PortfolioModal id="sports-store" title="Sport Store" image={cake} content="A Sports Store application that is built using ASP.NET Core MVC, Blazor Server, SQL Server. My First Major ASP.NET Core Project" link="https://github.com/Sathiyaraman-M/SportsStore" />
            <PortfolioModal id="endurance" title="Library Management System" image={cabin} content={
                <>
                    <i><b>Code Name: </b> Endurance</i>
                    <br/>
                    <span>A Library Management System completely built on .NET using Blazor WebAssembly, ASP.NET Core, SQL Server. Features excellent Authentication and fine-grained Authorization mechanisms and tight validation features using FluentValidation.</span>
                </>
            } link="https://github.com/Sathiyaraman-M/Endurance" />
            <PortfolioModal id="fluid" title="Hardware Assets Inventory" image={cabin} content={
                <>
                    <i><b>Code Name: </b> Resurgence</i>
                    <br/>
                    A Hardware Assets Inventory application, capable of tracking hardware components change, again fully built on .NET using Blazor WebAssembly, ASP.NET Core, SQL Server. Built as a part of <b>Smart India Hackathon 2022</b>.
                </>
            } link="https://github.com/Sathiyaraman-M/Assets_Inventory" />
            <PortfolioModal id="infinite" title="Novel Infinite" image={game} content={
                <>
                    <i><b>Code Name: </b> Novel Infinite</i>
                    <br/>
                    An Online Social Platform to share projects and blogs, again fully built on .NET using Blazor WebAssembly, ASP.NET Core, SQL Server.
                </>
            } link="https://github.com/Sathiyaraman-M/Infinite_M2" />
    </>
    );
};

export default Modals;