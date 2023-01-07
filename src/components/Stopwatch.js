import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    
    const [seconds,setseconds]=useState(0);
    const [minutes,setminutes]=useState(0);
    const [hours,sethours]=useState(0);
    const [value,setvalue]=useState("Start");
    const [savedsecs,setsavedsecs]=useState("-");
    const [savedmins,setsavedmins]=useState("-");
    const [savedhrs,setsavedhrs]=useState("-");

    var stopwatch;
    useEffect(()=>{
        clearInterval(stopwatch);
       stopwatch= setInterval(() => {
            setseconds(seconds+1);

            if(seconds==59){
                setminutes(minutes+1);
                setseconds(0);
            }
            if(minutes==59 && seconds==59){
                sethours(hours+1);
            }

        }, 1000);

        return ()=>clearInterval(stopwatch);
    });

    const stopit=()=>{
        clearInterval(stopwatch);
        setvalue("Resume");
        clearInterval(stopwatch);   
    }

    const resetit=()=>{
        clearInterval(stopwatch);
        setseconds(0);
        setminutes(0);
        sethours(0);
        setvalue("Start");
    }

    const startit=()=>{
        clearInterval(stopwatch);
        setvalue("Start");

        stopwatch= setInterval(() => {
            setseconds(seconds+1);

            if(seconds==59){
                setminutes(minutes+1);
                setseconds(0);
            }
            if(minutes==59 && seconds==59){
                sethours(hours+1);
            }

        }, 1000);
    }

    const savetime=()=>{
        localStorage.setItem('secs',seconds);
        localStorage.setItem('mins',minutes);
        localStorage.setItem('hrs',hours);
    }

    const displayprevtime=()=>{
        setsavedhrs(localStorage.getItem('hrs'));
        setsavedmins(localStorage.getItem('mins'));
        setsavedsecs(localStorage.getItem('secs'));
    }

  return (
    <>
    <div id="stopwatchbox">
      <div id="timedisplay">
        <h1>{hours<10? "0"+hours : hours}:{minutes<10? "0"+minutes : minutes}:{seconds<10? "0"+seconds : seconds}</h1>
      </div>
      <div id="startstopreset">
        <button className='button-24' id="start" onClick={startit}>{value}</button> &nbsp;&nbsp;&nbsp;
        <button className='button-24' id="stop" onClick={stopit}>Stop</button>&nbsp;&nbsp;&nbsp;
        <button className='button-24' id="reset" onClick={resetit}>Reset</button>&nbsp;&nbsp;&nbsp;
        <button className='button-24' id="savee" onClick={savetime}>Save</button>
      </div>
      <i>Use double clicks !</i>
    </div>

    <div id="prevtime">
        <button className="button-24" id="prev" onClick={displayprevtime}>Display Previous time</button><br />
        <div id="displayprev"><h2 align="center">{savedhrs}:{savedmins}:{savedsecs}</h2></div>
    </div>
    </>
  )
}

export default Stopwatch
