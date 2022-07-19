import React,{useRef} from 'react';

function Useref() {
    const inputRef = useRef(null);
    function handelInput(){
        inputRef.current.value = "Hello";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handelInput}>HandelInput</button>
        </div>
    )
}
export default Useref;