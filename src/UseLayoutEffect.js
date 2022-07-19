import React,{useLayoutEffect, useEffect} from 'react';

function UseLayoutEffect(){
   
    useEffect(()=>{
        console.log('useEffect');
    },[])
    useLayoutEffect(()=>{
        console.log('useLayoutEffect');  // this will be called only once when the component is mounted before the useEffect is called
    },[])
    return(
        <>
        <h1>UseLayoutEffect</h1>
        </>
    )
}

export default UseLayoutEffect;