import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";



const Navbar= ()=>{

    let navigate = useNavigate();


    return(
        <div>
            <div className="nav">
                <div className="Title">
                    Dictionary App
                </div>
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/history">History</NavLink>
                </div>
            </div>
            {/* <button onClick={()=> navigate("/search")}>Search</button> */}
            <Outlet/>
        </div>
    )
}







export default Navbar;