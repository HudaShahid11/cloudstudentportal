import React from 'react';
import { NavLink } from 'react-router-dom';

const Dnavbar = () => {
    return(
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-sm-12 col-md-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/dashboard">Welcome Student</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link"  area-current="page" to="/dashboard">Dashboard</NavLink>
                                </li>
  
                               
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" exact to="/">Logout</NavLink>
                                </li>
                            </ul>
                            
                            </div>
                        </div>
                        </nav>
            </div>
                </div>
            </div>
        </>
    )
}
export default Dnavbar;
