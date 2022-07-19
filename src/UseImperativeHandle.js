import React,{useRef} from "react";
import Button from "./Button";
function UseImperativeHandle(){
    const Buttonref = useRef(null);
    return(
        <>
       
        <button onClick={()=>Buttonref.current.handelShowText()}>Parent Button</button>
        <Button ref={Buttonref}></Button>
        </>
    )
}

export default UseImperativeHandle;