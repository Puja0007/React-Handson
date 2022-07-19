import React,{useContext} from "react";
import {AppContext} from './UseContextTutorial';
const Login = ()=>{
    const { setUserName } = useContext(AppContext);
    return(
        <div>
        <input onChange={(event)=>setUserName(event.target.value)}/>
        <input type="password" placeholder="Password" />
        <button onClick={()=>localStorage.setItem("login",true)}>Login</button>
        </div>
    )
}

export default Login;