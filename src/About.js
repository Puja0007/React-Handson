import React from 'react';
import { useLocation } from 'react-router-dom';
function About(){
    //use of useLocation()
    const location = useLocation();
    console.log(location);
    return(<div>
        <h1>It's About</h1>
    </div>)
}

export default About;