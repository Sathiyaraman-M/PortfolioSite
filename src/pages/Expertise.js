import PageHeader from "../components/PageHeader";
import ExpertiseSection from "../sections/ExpertiseSection";
import ExpertiseItem from "../components/ExpertiseItem";

import csharp from '../assets/expertise/csharp.png';
import javascript from '../assets/expertise/javascript.png';
import typescript from '../assets/expertise/typescript.png';
import c from '../assets/expertise/c.png';
import cpp from '../assets/expertise/cpp.png';
import java from '../assets/expertise/java.png';
import fsharp from '../assets/expertise/fsharp.png';
import xaml from '../assets/expertise/xaml.png';
import yaml from '../assets/expertise/yaml.png';
import python from '../assets/expertise/python.png';
import html from '../assets/expertise/html.png';
import css from '../assets/expertise/css.png';

import aspnet_core_api from '../assets/expertise/aspnetcore.jpg';
import aspnet_core_mvc from '../assets/expertise/aspnetcore-mvc.png';
import blazor from '../assets/expertise/blazor.png';
import bootstrap from '../assets/expertise/bootstrap.png';
import angular from '../assets/expertise/angular.png';
import react from '../assets/expertise/react.png';
import windowsforms from '../assets/expertise/windowsforms.png';
import wpf from '../assets/expertise/wpf.png';
import winui from '../assets/expertise/winui.png';
import flutter from '../assets/expertise/flutter.png';

import mysql from '../assets/expertise/mysql.png'
import sqlserver from '../assets/expertise/sql-server.png'
import postgresql from '../assets/expertise/postgresql.png'
import sqlite from '../assets/expertise/sqlite.png'

import arch from '../assets/expertise/arch.png'
import androidstudio from '../assets/expertise/androidstudio.png'
import azurepipelines from '../assets/expertise/azurepipelines.png'
import docker from '../assets/expertise/docker.png'
import firebase from '../assets/expertise/firebase.png'
import git from '../assets/expertise/git.png'
import githubactions from '../assets/expertise/githubactions.png'
import iis from '../assets/expertise/iis.png'
import intellij from '../assets/expertise/intellijidea.png'
import rider from '../assets/expertise/rider.png'
import vbox from '../assets/expertise/vbox.png'
import postman from '../assets/expertise/postman.png'
import ssms from '../assets/expertise/sql-server-management-studio.png'
import ubuntu from '../assets/expertise/ubuntu.png'
import vs from '../assets/expertise/vs.png'
import vsc from '../assets/expertise/vsc.png'
import webstorm from '../assets/expertise/webstorm.png'
import wsl from '../assets/expertise/wsl.png'

const Expertise = () => {
    const languages = [
        <ExpertiseItem name="C#" image={csharp} />,
        <ExpertiseItem name="JavaScript" image={javascript} />,
        <ExpertiseItem name="TypeScript" image={typescript} />,
        <ExpertiseItem name="C" image={c} />,
        <ExpertiseItem name="C++" image={cpp} />,
        <ExpertiseItem name="Java" image={java} />,
        <ExpertiseItem name="F#" image={fsharp} />,
        <ExpertiseItem name="XAML" image={xaml} />,
        <ExpertiseItem name="YAML" image={yaml} />,
        <ExpertiseItem name="Python" image={python} />,
        <ExpertiseItem name="HTML" image={html} />,
        <ExpertiseItem name="CSS" image={css} />,
    ]
    const frameworks = [
        <ExpertiseItem name="ASP.NET Core MVC" image={aspnet_core_mvc} setBgColor={true} />,
        <ExpertiseItem name="ASP.NET Core API" image={aspnet_core_api} setBgColor={true} />,
        <ExpertiseItem name="Blazor" image={blazor} setBgColor={true} />,
        <ExpertiseItem name="Bootstrap" image={bootstrap} setBgColor={true} />,
        <ExpertiseItem name="Angular" image={angular} setBgColor={true} />,
        <ExpertiseItem name="React" image={react} setBgColor={true} />,
        <ExpertiseItem name="Windows Forms" image={windowsforms} setBgColor={true} />,
        <ExpertiseItem name="WPF (.NET)" image={wpf} setBgColor={true} />,
        <ExpertiseItem name="WinUI (.NET)" image={winui} setBgColor={true} />,
        <ExpertiseItem name="Flutter" image={flutter} setBgColor={true} />,
    ]
    const databases = [
        <ExpertiseItem name="SQL Server" image={sqlserver} />,
        <ExpertiseItem name="MySQL" image={mysql} />,
        <ExpertiseItem name="PostgreSQL" image={postgresql} />,
        <ExpertiseItem name="Sqlite" image={sqlite} />,
    ]
    const softwaresAndTools = [
        <ExpertiseItem name="Arch Linux" image={arch} setBgColor={true} />,
        <ExpertiseItem name="Android Studio" image={androidstudio} setBgColor={true} />,
        <ExpertiseItem name="Azure Pipelines" image={azurepipelines} setBgColor={true} />,
        <ExpertiseItem name="Docker" image={docker} setBgColor={true} />,
        <ExpertiseItem name="Firebase Hosting" image={firebase} setBgColor={true} />,
        <ExpertiseItem name="Git" image={git} setBgColor={true} />,
        <ExpertiseItem name="GitHub Actions" image={githubactions} setBgColor={true} />,
        <ExpertiseItem name="IIS" image={iis} setBgColor={true} />,
        <ExpertiseItem name="IntelliJ IDEA" image={intellij} setBgColor={true} />,
        <ExpertiseItem name="Jetbrains Rider" image={rider} setBgColor={true} />,
        <ExpertiseItem name="Oracle VM VirtualBox" image={vbox} setBgColor={true} />,
        <ExpertiseItem name="Postman" image={postman} setBgColor={true} />,
        <ExpertiseItem name="SQL Server Management Studio" image={ssms} setBgColor={true} />,
        <ExpertiseItem name="Ubuntu" image={ubuntu} setBgColor={true} />,
        <ExpertiseItem name="Visual Studio" image={vs} setBgColor={true} />,
        <ExpertiseItem name="Visual Studio Code" image={vsc} setBgColor={true} />,
        <ExpertiseItem name="WebStorm" image={webstorm} setBgColor={true} />,
        <ExpertiseItem name="Windows Subsystem for Linux" image={wsl} setBgColor={true} />,
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