import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a href="/" className="navbar-brand">Plan<span className="text-primary">It!</span></a>
              <div className="navbar-expand" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Log in <i className="fa fa-arrow-right"></i></a>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="btn btn-primary" href="/">Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="page-banner home-banner">
              <div className="row align-items-center flex-wrap-reverse h-100">
                <div className="col-md-6 py-5">
                  <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
                    <h1 className="mb-4">Organize all your task in one place.</h1>
                    <p className="text-lg mb-5">Create clear, multi-functional to-do lists to easily manage your ideas and work from anywhere so you never forget anything again.</p>
                    <a href="/" className="btn btn-primary">Get Started !</a>
                  </div>  
                </div>
                <div className="col-md-6 py-5">
                  <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700">
                    <div className="img-fluid text-center" id="mainimg">
                      <img src="./img/Checklist.svg" alt="" />  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <div className = "page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-service">
                  <div className="header">
                    <img className= "todoimg" src="./img/Todo.svg" alt="" />
                  </div>
                  <div className="body">
                    <h5 className="text-head">Todo List</h5>
                    <p>List everything that you have to do, with the most important tasks at the top of the list.</p>
                    <a href="service.html" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-service">
                  <div className="header">
                    <img className="organizeimg" src="./img/Setup.svg" alt="" />
                  </div>
                  <div className="body">
                    <h5 className="text-head">Organize</h5>
                    <p>Organize your favourite and necessary websites in one place so it's easy to access.</p>
                    <a href="/" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-service">
                  <div className="header">
                    <img className= "chatimg" src="./img/Chat.svg" alt="" />
                  </div>
                  <div className="body">
                    <h5 className="text-head">Chat</h5>
                    <p>Work smarter as a team with real-time chat to get more done together while working on a project.</p>
                    <a href="/" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
  
        <div className="page-section" id="about">
          <div className="container">
            <div className="row align-items-center mx-5">
              <div className="col-lg-6 py-3">
                <span className="subhead">About us</span>
                <h2 className="title-section">Work Better With Us</h2>
                <div className="divider"></div>
                <p>PlanIt is the flexible work management tool where teams can ideate plans, collaborate on projects, organize workflows, and track progress in a visual, productive, and rewarding way. From brainstorm to planning to execution, PlanIt manages the big milestones and the day-to-day tasks of working together and getting things done.</p>
                <a href="about.html" className="btn btn-primary mt-3">Read More</a>
              </div>
              <div className="col-lg-6 py-3">
                <div className="img-fluid py-3 text-center">
                  <img className="aboutimg" src="./img/About us.svg" alt="" />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
  
  export default Home;
  