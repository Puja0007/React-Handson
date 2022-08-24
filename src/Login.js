import React,{useContext} from "react";
import {AppContext} from './UseContextTutorial';
const Login = ()=>{
    const { setUserName,setShowProfile } = useContext(AppContext);
    return(
        <div>
        <input onChange={(event)=>setUserName(event.target.value)}/>
        <input type="password" placeholder="Password" />
        <button onClick={()=>setShowProfile(true)}>Login</button>
        </div>
    )
}

export default Login;