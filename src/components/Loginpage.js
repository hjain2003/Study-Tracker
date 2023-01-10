import React, { useState } from 'react'
import Navbar from './Navbar'
import {signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from "../firebaseconfig"

const Loginpage = () => {

    const navigate = useNavigate();

    const [erroronlogin,seterroronlogin]=useState("");
    const [values, setvalues] = useState({
        email: "",
        pass: ""
    })

    const [errmsg, seterrmsg] = useState("");
    const [submitbtndisable, setsubmitbtndisable] = useState(false);

    const handlesubmission = () => {
        if (!values.email && values.pass) {
            seterrmsg("Email Field empty!");
            return;
        }
        else if (!values.pass && values.email) {
            seterrmsg("Password field empty!");
            return;
        }
        else if (!values.pass && !values.email) {
            seterrmsg("Empty fields !");
            return;
        }
        seterrmsg("");
        setsubmitbtndisable(true);
        signInWithEmailAndPassword(auth, values.email, values.pass).then(
            (res) => {
                setsubmitbtndisable(false);
                const user = res.user
                console.log(user);
                navigate("/Home.js")
            }).catch(err => seterroronlogin("Invalid ID/Password"));
    }

    const login = async () => { };
    return (
        <>
            <Navbar />
            <div id="logincontainer" className="loginsignup">
                <div id="loginbox" className='loginsignupbox'>
                    <h3>LOGIN</h3>
                    <span id="erroronsignup">{erroronlogin}</span>
                    <br />
                    <hr />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={(event) =>
                        setvalues((prev) => ({ ...prev, email: event.target.value }))} />
                    <br />
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" onChange={(event) =>
                        setvalues((prev) => ({ ...prev, pass: event.target.value }))} />
                    <br /><br />
                    <span id="errormsg">{errmsg}</span>
                    <button id="loginbtn" className='button-18' onClick={handlesubmission} disabled={submitbtndisable}>LOGIN</button>
                    <br />
                    <span id="already" className='loginsignupendline'>Don't have an account? &nbsp;<a href="SignupPage.js">SignUp</a> </span>
                </div>
            </div>
        </>
    )
}

export default Loginpage
