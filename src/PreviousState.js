import React,{useState} from 'react';

const PreviousState = ()=>{
    const [count, setCount] = useState(0);
    function setPreviousState(){
        // using previous state we are adding 1 always with the previous value of  count
        for(let i=0; i<5; i++){
            setCount((pre)=>{
                return pre+1; // first value of count is 5 after clicking here
            })
        }
        // Without using previous state we are not adding 1 always with the previous value of  count, because as soon as setCount updates the value of count, the for loop will be ended
        // for(let i=0; i<5; i++){
        //     setCount(count+1); // first value of count is 1 after clicking here
        // }
    }
    return(
        <>
        <h1>Count is : {count}</h1>
            <button onClick={setPreviousState}>Click me</button>
        </>
    )
}

export default PreviousState;