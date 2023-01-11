import './App.css';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Subject from './components/Subject';
import {Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import Calendar from './components/Calendar';
import Stopwatch from './components/Stopwatch';
import Motivation from './components/Motivation';
import Loginpage from './components/Loginpage';
import Home from './components/Home';
import SignupPage from './components/SignupPage';
import { useEffect } from 'react';
import {auth} from './firebaseconfig'

function App() {
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      console.log(user);
    })
  },[]); 
  return (

   <>
   <Routes>
    <Route path='/' element={<SignupPage/>}/>
    {/* <Route path='/' element={<div><Navbar/><Features/></div>}/> */}
    <Route path='/Home.js' element={<Home/>}/>
    <Route path='/Loginpage.js' element={<Loginpage/>}/>
    <Route path='/SignupPage.js' element={<SignupPage/>}/>
    <Route path='/subject.js' element={<Subject/>}/>
    <Route path='/todo.js' element={<Todo/>}/>
    <Route path='/calendar.js' element={<Calendar/>}/>
    <Route path='/stopwatch.js' element={<Stopwatch/>}/>
    <Route path='/motivation.js' element={<Motivation/>}/>
   </Routes>
   </>
  );
}

export default App;
