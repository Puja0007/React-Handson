import React,{forwardRef} from "react";

function Child(props,ref){
    const data = "No One Loves me"
    return(<div>
        <input type="text" ref={ref}/>
  <button onClick={()=>props.data(data)}>Data</button>
    </div>)
}

export default forwardRef(Child);
