import React,{useState,useMemo} from 'react';

function Usememo(){
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(1);
    const multiply = useMemo(()=>{
        console.log("Calculating");
        return 2*count;
    },[count]);
    return(
        <div>
           <h2>count: {count}</h2>
              <button onClick={()=>setCount(count+1)}>IncrementCount</button>
            <h2>item: {item}</h2>
                <button onClick={()=>setItem(item*5)}>IncrementItem</button>  
            <h2>{multiply}</h2>
        </div>
    )
}
export default Usememo;