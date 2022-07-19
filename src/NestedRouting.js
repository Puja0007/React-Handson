import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const NestedRouting = ()=>{
    return(<>
    <h1>It's Nested Router</h1>
    {/* for nested routing you need to use Outlet, nested routing means routing under a page */}
    <Link to='/about' state={{name:"puja"}}>About</Link>
    <Outlet></Outlet>
    </>)
}

export default NestedRouting;