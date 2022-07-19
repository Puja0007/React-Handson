import React,{useState} from 'react';

const UseStateWithArray = () => {
    const [arr, setArr] = useState([]);
    function createArray(){
        setArr([...arr,{
            id: arr.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
    return(<div>
        <h1>UseStateWithArray</h1>
        <button onClick={createArray}>PushItem</button>
        <ul>
            {arr.map((elm)=>{
               return <li key={elm.id}>{elm.value}</li>
        })}
        </ul>
    </div>)
}

export default UseStateWithArray;