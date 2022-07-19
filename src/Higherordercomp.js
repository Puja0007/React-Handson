import React,{useState} from 'react';

function Higherordercomp(){
    return(<div>
        <h1>Higherordercomp</h1>
        <Actualhigherordercomp comp={Propcomponent}/>
    </div>);
}

function Actualhigherordercomp(props){
    return(<div>
        <h1 style={{color:'green'}}><props.comp/></h1>

    </div>);
}

function Propcomponent(){
    const [count, setCount] = useState(0);
    return(<div>
        {count}
        <button onClick={()=>setCount(count+1)}>IncrementCount</button>
    </div>);
}

export default Higherordercomp;