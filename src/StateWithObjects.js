import React,{useState} from 'react';

const StateWithObjects = () => {
    const [obj, setObj] = useState({name:"Puja", age:27});
    return(
        <>
        <h1>State With Object</h1>
        <input type="text"  placeholder="Enter Name" onChange={(event)=>{setObj({age:obj.age, name:event.target.value})}}/>
        <input type ="text" placeholder="Enter Age" onChange={(event)=>{setObj({age:event.target.value, name:obj.name})}}/>
        <h2>{obj.name}</h2>
        <h2>{obj.age}</h2>

        </>
    )
}

export default StateWithObjects;