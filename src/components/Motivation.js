import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import inspquotes from './Quotes.json'

const Motivation = () => {

        const [dispquote,setdisplayquote]=useState("");

        let r1 = 0;
        let r2 = 49;
        let randy = r1 + (r2 - r1) * Math.random();
        let rand = Math.round(randy);
        console.log(inspquotes.quotes[0].quote);
        console.log(inspquotes.quotes.length);

    const pagereload=()=>{
        window.location.reload();
    }
    
    useEffect(()=>{
        setdisplayquote(inspquotes.quotes[rand].quote);
    })
    
  return (
    <>
        <Navbar/>
        <div id="displayquotes">
            <b>{dispquote}</b>
            <br />
            <button onClick={pagereload} className="button-3">Need More Motivation !</button>
        </div>
    </>
  )
  }

export default Motivation
