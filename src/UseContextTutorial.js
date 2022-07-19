import React,{createContext, useState} from 'react';
import User from './User';
import Login from './Login';

export const AppContext = createContext();
function UseContextTutorial(){
    const [userName,setUserName] = useState("");
    return(<AppContext.Provider value={{userName,setUserName}}>
        <h1>Use of UseContext</h1>
        <Login/><User/>
    </AppContext.Provider>)
}

export default UseContextTutorial;
