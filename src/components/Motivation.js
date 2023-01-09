import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

const Motivation = () => {

    const [quotes,setquotes]=useState("");
    
    const getquotes=async()=>{
        try{
            let url='https://api.quotable.io/random?tags=success';

            const res=await fetch(url);
            const data=await res.json();

            console.log(data.content);
            setquotes(data.content);

        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getquotes();
    },[])

    const pagereload=()=>{
        window.location.reload();
    }
  return (
    <>
        <Navbar/>
        <div id="displayquotes">
            <b>{quotes}</b>
            <br />
            <button onClick={pagereload} className="button-3">Need More Motivation !</button>
        </div>
    </>
  )
  }

export default Motivation
