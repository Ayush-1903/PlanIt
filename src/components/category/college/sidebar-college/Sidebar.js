import './Sidebar.css';
import TodoList from '../../../todo/TodoList';
import { useState } from 'react';

function Sidebar({sidebarOpen, closeSidebar}) {

    const [todoPopup, setTodoPopup] = useState(false);

    return(
        <div className = {sidebarOpen ? "sidebar-open" : "" } id = "sidebar">
            <div className="sidebar-title">
                <div className = "sidebar-img">
                    {/* <img alt="logo"/>        */}
                    <a href="/"><h1>PlanIt</h1></a>
                </div>
                <i className="fa fa-times" id="sideIcon" onClick={() => closeSidebar()}></i>
            </div>

            <div className="side-menu">
                <div className="side-link active-menu-link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>

                <div className="side-link">
                    <i className="fa fa-solid fa-clipboard-check"></i>
                    <a href="#" onClick={() => setTodoPopup(true)}>Todo List</a>
                </div>

                <TodoList trigger={todoPopup} setTrigger={setTodoPopup}/>
                {/* <h2>MNG</h2> */}

                {/* <div className="side-link"> 
                    <i className="fa fa-building-o"></i>
                    <a gref="#"></a>
                </div>

                <div className="side-link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Todo</a>
                </div>

                <div className="side-link">
                    <i className="fa fa-archieve"></i>
                    <a href="#"></a>
                </div>

                <h2>LEAVE</h2>

                <div className="side-link">
                    <i className="fa fa-question"></i>
                    <a href="#"></a>
                </div>

                <div className="side-link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#"></a>
                </div>

                <div className="side-link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#"></a>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar;