import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <>
        <Link to="/about">About</Link>

        {/* we cant apply css to link, so we need to use NavLink */}
        <NavLink className="nav-bar-link" style={({isActive})=>{ return {backgroundColor: isActive? 'green' : 'blue'}}} to="/">Home</NavLink>
        <NavLink className="nav-bar-link" style={({isActive})=>{ return {backgroundColor: isActive? 'green' : 'blue'}}} to="/about">About</NavLink>
        </>
    )
}

export default Navbar;