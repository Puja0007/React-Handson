import React from "react";

const Login = ()=>{
    return(
        <>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={()=>localStorage.setItem("login",true)}>Login</button>
        </>
    )
}

export default Login;