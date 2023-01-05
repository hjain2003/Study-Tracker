import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Subject from './components/Subject';
import {Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<div><Navbar/><Features/></div>}/>
    <Route path='/subject.js' element={<Subject/>}/>
    <Route path='/todo.js' element={<Todo/>}/>
   </Routes>
   </>
  );
}

export default App;
