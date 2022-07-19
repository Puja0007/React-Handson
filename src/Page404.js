import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Page404(){
    return(<div>
        <h1>Page Not Found</h1>
        <Link to="/home">Back To Home</Link>
    </div>)
}

export default Page404;