import React,{useContext} from 'react';
import {AppContext} from './UseContextTutorial';

function User(){
    const { userName } = useContext(AppContext);
    return(
        <div>
        <h1>Name: {userName}</h1>
        </div>
    )
}

export default User;