import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigationrouting(){

    const navigate = useNavigate();
    const navigateTo=(url)=>{
        navigate(url);
    }
    return(<div>
        <button onClick={()=>navigateTo('/about')}>About</button>
        <button onClick={()=>navigateTo('/')}>Home</button>
    </div>)
}

export default Navigationrouting;