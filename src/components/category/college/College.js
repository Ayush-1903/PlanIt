import React from "react";
import Sidebar from "./sidebar-college/Sidebar";
import PRACTICETiles from "./tiles-college/practice/PRACTICETiles";
import DSATiles from "./tiles-college/learn/dsa/DSATiles";  
import WEBTiles from "./tiles-college/learn/web/WEBTiles"; 
import DATATiles from "./tiles-college/learn/datascience/DATATiles";  
import PlacementTiles from "./tiles-college/placement/PlacementTiles";
import FreelanceTiles from "./tiles-college/freelance/FreelanceTiles";
import StudyTiles from "./tiles-college/study/StudyTile";
import '../nav/nav.css';
import '../tiles-style/Tiles.css';
import { useState } from "react";

function College () {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [active, setActive] = useState("MainTile");

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);  
    }

    const navLink = document.querySelectorAll("li");

    navLink.forEach(element => {
        element.addEventListener("click", function() {
            navLink.forEach(a=>a.classList.remove("active-link"))

            this.classList.add("active-link");
        })
    })

    return(
        <div className="dashmain">
            <nav className="mainnav">
                <div className="nav-icon" onClick={() => openSidebar()}>
                    <i className="fa fa-bars"></i>
                </div>

                <div className="navleft">
                    <ul>
                        <li><a>Learn <i className="fa fa-solid fa-caret-down"></i></a>
                            <ul className="drop-link">
                                <li className="sub-link"><a onClick={() => setActive("DSATile")}>Data Structures</a></li>
                                <li className="sub-link"><a onClick={() => setActive("WEBTile")}>Web Development</a></li>
                                <li className="sub-link"><a onClick={() => setActive("DATATile")}>Data Science & ML</a></li>
                            </ul>
                        </li>
                        <li className="active-link"><a onClick={() => setActive("MainTile")}>Practice</a></li>
                        <li><a onClick={() => setActive("PlacementTile")}>Internship/Placement</a></li>
                        <li><a onClick={() => setActive("FreelanceTile")} >Freelancing</a></li>
                        <li><a onClick={() => setActive("StudyTile")} >Higher Study</a></li>
                    </ul>
                </div>

                <div className="navright">
                    <a href="#">
                        <i className="fa fa-solid fa-user"></i>
                    </a>
                </div>  
            </nav>
            {active === "MainTile" && <PRACTICETiles />}
            {active === "DSATile" && <DSATiles />}
            {active === "WEBTile" && <WEBTiles />}
            {active === "DATATile" && <DATATiles />}
            {active === "PlacementTile" && <PlacementTiles />}
            {active === "FreelanceTile" && <FreelanceTiles />}
            {active === "StudyTile" && <StudyTiles />}
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        </div>
    )
}

export default College;