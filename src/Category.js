import React from "react";
import { Link } from "react-router-dom";

function Category(){
    return(
        <div className="category-content">
            <div className="sub-category">
                <h3>You are a ?</h3>
                <Link to="/signup" className="option1"><i className="fa fa-solid fa-school"></i>School Student</Link>
                <Link to="/signup" className="option2"><i className="fa fa-solid fa-graduation-cap"></i>College Student</Link>
            </div>
            <img className="choose" src="./img/Choose.svg" />
        </div>
    )
}

export default Category;