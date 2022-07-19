import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props)=>{
    const { Component } = props;
    
    const navigate = useNavigate();
    const navigateTo=(url)=>{
        navigate(url);
    }
    useEffect(()=>{
        if(!localStorage.getItem("login")){
            navigateTo('/login'); 
        }
    })
    return(
        <>
         <Component/>
        </>
    )
}

export default Protected;