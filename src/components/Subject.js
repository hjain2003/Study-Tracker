import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Flickity from 'react-flickity-component'
import userEvent from '@testing-library/user-event';

const Subject = () => {


    const [btnvalue, setbtnvalue] = useState('Save');
    const [textvalueai, settextvalueai] = useState("");
    const [textvaluemanpro, settextvaluemanpro] = useState("");
    const [textvaluedbms, settextvaluedbms] = useState("");
    const [textvalueedp, settextvalueedp] = useState("");
    const [textvaluedaa, settextvaluedaa] = useState("");
    const [textvaluemsat, settextvaluemsat] = useState("");
    const [textvaluecn, settextvaluecn] = useState("");
    const[entrytext,setentrytext]=useState("");

   

    const showaicontent=()=>{
        setentrytext(textvalueai);
        settextvalueai(entrytext);
    }
    const showdbmscontent=()=>{
        setentrytext(textvaluedbms);
        settextvaluedbms(entrytext);
    }
    const showmanprocontent=()=>{
        setentrytext(textvaluemanpro);
        settextvaluemanpro(entrytext);
    }
    const showedpcontent=()=>{
        setentrytext(textvalueedp);
        settextvalueedp(entrytext);
    }
    const showdaacontent=()=>{
        setentrytext(textvaluedaa);
        settextvaluedaa(entrytext);
    }
    const showcncontent=()=>{
        setentrytext(textvaluecn);
        settextvaluecn(entrytext);
    }
    const showmsatcontent=()=>{
        setentrytext(textvaluemsat);
        settextvaluemsat(entrytext);
    }
    const flickityOptions = {
        initialIndex: 2
    }

    const change=(e)=>{
        setentrytext(e.target.value);
    }

    const saveclicked = () => {
        localStorage.setItem('AI',textvalueai);
        localStorage.setItem('DBMS',textvaluedbms);
        localStorage.setItem('MANPRO',textvaluemanpro);
        localStorage.setItem('EDP',textvalueedp);
        localStorage.setItem('DAA',textvaluedaa);
        localStorage.setItem('CN',textvaluecn);
        localStorage.setItem('MSAT',textvaluemsat);
        alert("Values Updated!");
    }

    const load=()=>{
        settextvalueai(localStorage.getItem('AI'));
        settextvaluedbms(localStorage.getItem('DBMS'));
        settextvaluemanpro(localStorage.getItem('MANPRO'));
        settextvalueedp(localStorage.getItem('EDP'));
        settextvaluedaa(localStorage.getItem('DAA'));
        settextvaluecn(localStorage.getItem('CN'));
        settextvaluemsat(localStorage.getItem('MSAT'));
    }

    return (
        <>
            <Navbar />
            <div id="contentrow">

            <button className="button-3" role="button" id="loadit" onClick={load}>Load Data</button>

                <div id="subbuttons">
                    <button className="button-18" id="aibtn" onClick={showaicontent}>AI</button>
                    <button className="button-18" id="dbmsbtn" onClick={showdbmscontent}>DBMS</button>
                    <button className="button-18" id="manprobtn" onClick={showmanprocontent}>MANPRO</button>
                    <button className="button-18" id="edpbtn" onClick={showedpcontent}>EDP</button>
                    <button className="button-18" id="daabtn" onClick={showdaacontent}>DAA</button>
                    <button className="button-18" id="cnbtn" onClick={showcncontent}>COMP NETW</button>
                    <button className="button-18" id="msatbtn" onClick={showmsatcontent}>MSAT</button>
                </div>

                <textarea cols="25" rows="20" id="entry" value={entrytext} onChange={change} placeholder='//New Note'></textarea>

                <div id="subjectsdiv">
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                        id="scroll"
                    >
                        <textarea cols="25" rows="20" placeholder='//AI>' value={textvalueai}  ></textarea>
                        <textarea cols="25" rows="20" placeholder='//MANPRO' value={textvaluemanpro}></textarea>
                        <textarea cols="25" rows="20" placeholder='//DBMS' value={textvaluedbms}></textarea>
                        <textarea cols="25" rows="20" placeholder='//EDP' value={textvalueedp}></textarea>
                        <textarea cols="25" rows="20" placeholder='//DAA' value={textvaluedaa}></textarea>
                        <textarea cols="25" rows="20" placeholder='//MSAT' value={textvaluemsat}></textarea>
                        <textarea cols="25" rows="20" placeholder='//COMP NETWORKS' value={textvaluecn}></textarea>
                    </Flickity>
                </div>

                <div id="savebtn">
                    <button className="button-3" role="button" onClick={saveclicked}>{btnvalue}</button><br />
                </div>

            </div>
        </>
    )
}

export default Subject
