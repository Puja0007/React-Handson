import React,{useEffect, useRef} from 'react';

function PreviousProps(props) {
    const previousValue = useRef(); 
    useEffect(()=>{
        previousValue.current = props.count; // useRef is used to store the previous value of count from the dom
    })
    return(
        <>
            <h1>Previous Props {previousValue.current}</h1>
            <h2>Current Props {props.count}</h2>
        </>
    )
}
 
export default PreviousProps;
