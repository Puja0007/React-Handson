import React,{useRef} from "react";
import Child from "./Child";
function Parent(){
    const inputRef = useRef(null);
    function getAlert(data){
        alert(data);
    }
    function handelChildInput(){
        inputRef.current.value = "1000";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }
    return(<div>
        <Child data={getAlert} ref={inputRef}/>
        <button onClick={handelChildInput}>ChangeChildInput</button>
    </div>)
}

export default Parent;
