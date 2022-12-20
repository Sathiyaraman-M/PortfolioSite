import PageHeader from "../components/PageHeader";
import ExpertiseSection from "../sections/ExpertiseSection";
import ExpertiseItem from "../components/ExpertiseItem";

import aspnet_core_api from '../assets/expertise/aspnetcore.jpg';
import aspnet_core_mvc from '../assets/expertise/aspnetcore-mvc.png';
import blazor from '../assets/expertise/blazor.png';
import bootstrap from '../assets/expertise/bootstrap.png';
import docker from '../assets/expertise/docker.png'
import mysql from '../assets/expertise/mysql.png'
import sqlserver from '../assets/expertise/sql-server.png'

const Expertise = () => {
    const languages = [
        <ExpertiseItem name="C#" image={blazor} />,
        <ExpertiseItem name="JavaScript" image={blazor} />,
        <ExpertiseItem name="TypeScript" image={blazor} />,
        <ExpertiseItem name="C" image={blazor} />,
        <ExpertiseItem name="C++" image={blazor} />,
        <ExpertiseItem name="F#" image={blazor} />,
        <ExpertiseItem name="XAML" image={blazor} />,
        <ExpertiseItem name="YAML" image={blazor} />,
        <ExpertiseItem name="Python" image={blazor} />,
        <ExpertiseItem name="HTML" image={blazor} />,
        <ExpertiseItem name="CSS" image={blazor} />,
    ]
    const frameworks = [
        <ExpertiseItem name="ASP.NET Core MVC" image={aspnet_core_mvc} setBgColor={true} />,
        <ExpertiseItem name="ASP.NET Core API" image={aspnet_core_api} setBgColor={true} />,
        <ExpertiseItem name="Blazor" image={blazor} setBgColor={true} />,
        <ExpertiseItem name="Bootstrap" image={bootstrap} setBgColor={true} />,
        <ExpertiseItem name="Angular" image={blazor} setBgColor={true} />,
        <ExpertiseItem name="Windows Forms" image={blazor} setBgColor={true} />,
        <ExpertiseItem name="WPF (.NET)" image={blazor} setBgColor={true} />,
        <ExpertiseItem name="WinUI (.NET)" image={blazor} setBgColor={true} />,
        <ExpertiseItem name="Flutter" image={blazor} setBgColor={true} />,
    ]
    const databases = [
        <ExpertiseItem name="SQL Server" image={sqlserver} />,
        <ExpertiseItem name="MySQL" image={mysql} />,
        <ExpertiseItem name="PostgreSQL" image={sqlserver} />,
        <ExpertiseItem name="Sqlite" image={sqlserver} />,
    ]
    const softwaresAndTools = [
        <ExpertiseItem name="Arch Linux" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Android Studio" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Azure Pipelines" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Docker" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Firebase Hosting" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Git" image={docker} setBgColor={true} />,
        <ExpertiseItem name="GitHub Actions" image={docker} setBgColor={true} />,
        <ExpertiseItem name="IIS" image={docker} setBgColor={true} />,
        <ExpertiseItem name="IntelliJ IDEA" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Jetbrains Rider" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Oracle VM VirtualBox" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Postman" image={docker} setBgColor={true} />,
        <ExpertiseItem name="SQL Server Management Studio" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Visual Studio" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Visual Studio Code" image={docker} setBgColor={true} />,
        <ExpertiseItem name="WebStorm" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Windows Subsystem for Linux" image={docker} setBgColor={true} />,
    ]
    return (
        <>
            <PageHeader pagetitle={"Expertise"}/>
            <ExpertiseSection title="Languages I have worked" content={languages} setBgColor={false} />
            <ExpertiseSection title="Frameworks I have worked" content={frameworks} setBgColor={true} />
            <ExpertiseSection title="Databases I have worked" content={databases} setBgColor={false} />
            <ExpertiseSection title="Softwares and Tools I have worked" content={softwaresAndTools} setBgColor={true} />
        </>
    );
}

export default Expertise;