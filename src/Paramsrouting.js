import React from 'react';
import { useParams } from 'react-router-dom';

function Paramsrouting(){
    const params = useParams();
    const {name} = params;
    return(<div>
        <h1>{name}'s page</h1>
    </div>)
}
export default Paramsrouting;