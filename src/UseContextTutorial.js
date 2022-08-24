import React,{createContext, useState} from 'react';
import User from './User';
import Login from './Login';

export const AppContext = createContext();
function UseContextTutorial(){
    const [userName,setUserName] = useState("");
    const [showProfile, setShowProfile] = useState(false);
    return(<AppContext.Provider value={{userName,setUserName, setShowProfile}}>
        <h1>Use of UseContext</h1>
        {showProfile ? <User/> : <Login/>}
    </AppContext.Provider>)
}

export default UseContextTutorial;
