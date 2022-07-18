import React from "react";
import { useState } from "react";
import Sidebar from "./sidebar-school/Sidebar";
import '../nav/nav.css';
import JEENEETTiles from './tiles-school/jee-neet/JEENEETTiles';
import COACHINGTiles from './tiles-school/coaching/COACHINGTiles';

function Student(){
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [active, setActive] = useState("JEETile");

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const navLink = document.querySelectorAll(".college-link");

    navLink.forEach(element => {
        element.addEventListener("click", function() {
            navLink.forEach(a=>a.classList.remove("active-link"));
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
                                <li className="sub-link"><a onClick={() => setActive("JEETile")}>Data Structures</a></li>
                                <li className="sub-link"><a onClick={() => setActive("WEBTile")}>Web Development</a></li>
                                <li className="sub-link"><a onClick={() => setActive("DATATile")}>Data Science & ML</a></li>
                            </ul>
                        </li>
                        <li><a>Competitive <i className="fa fa-solid fa-caret-down"></i></a>
                            <ul className="drop-link">
                                <li className="sub-link"><a onClick={() => setActive("JEETile")}>JEE</a></li>
                                <li className="sub-link"><a onClick={() => setActive("WEBTile")}>NEET</a></li>
                            </ul>
                        </li>
                        <li><a>Coaching <i className="fa fa-solid fa-caret-down"></i></a>
                            <ul className="drop-link">
                                <li className="sub-link"><a onClick={() => setActive("COACHINGTile")}>JEE</a></li>
                                <li className="sub-link"><a onClick={() => setActive("WEBTile")}>NEET</a></li>
                            </ul>
                        </li>
                        <li><a onClick={() => setActive("")}>Internship/Placement</a></li>
                    </ul>
                </div>

                <div className="navright">
                    <a href="#">
                        <i className="fa fa-solid fa-user"></i>
                    </a>
                </div>  
            </nav>
            {active === "JEETile" && <JEENEETTiles />}
            {active === "COACHINGTile" && <COACHINGTiles />}
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        </div>
    )
}

export default Student;