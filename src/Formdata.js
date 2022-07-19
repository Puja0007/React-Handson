import React, { useEffect, useState } from "react";

function Formdata(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    function getFormData(e){
        e.preventDefault();
        console.log(name, email, message);
    }
    return(
        <div>
            <h1>Form</h1>
            <form>
                <label>Name:</label>
                <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                <label>Email:</label>
                <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Message:</label>
                <textarea name="message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                <input type="submit" value="Submit"  onClick={getFormData}/>
            </form>
        </div>
    )
}
export default Formdata;