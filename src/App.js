import './App.css';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Subject from './components/Subject';
import {Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import Calendar from './components/Calendar';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<div><Navbar/><Features/></div>}/>
    <Route path='/subject.js' element={<Subject/>}/>
    <Route path='/todo.js' element={<Todo/>}/>
    <Route path='/calendar.js' element={<Calendar/>}/>
    <Route path='/stopwatch.js' element={<Stopwatch/>}/>
   </Routes>
   </>
  );
}

export default App;
