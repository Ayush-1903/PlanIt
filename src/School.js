import React from "react";
import { Link } from "react-router-dom";

function Student(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <a href="/" className="navbar-brand">Plan<span className="text-primary">It!</span></a>
                <div className="navbar-expand" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login  " className="nav-link" >Log in <i className="fa fa-arrow-right"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="btn btn-primary">Sign up</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Student;