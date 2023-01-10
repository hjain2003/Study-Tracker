import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Tableentries from './Tableentries';

const getlocalitems=()=>{
  let entries=localStorage.getItem('eventdetails');
  console.log(entries);

  if(entries){
    return JSON.parse(entries);
  }
  else{
    return [];
  }
}

const Calendar = () => {
 
  const [eventdetails,seteventdetails]=useState(getlocalitems());
  const [date,setdate]=useState('');
  const [event,setevent]=useState('');

  const handletextchange=(e)=>{
    setdate(e.target.value);
  }
  const handletextareachange=(e)=>{
    setevent(e.target.value);
  }

  const handleformsubmit=(e)=>{
    e.preventDefault();

    let newdetails={
      date,
      event
    }
    seteventdetails([...eventdetails,newdetails]);
    setdate('');
    setevent('');
  }
  
  const deletetableentry=(event)=>{
    const filteredevent=eventdetails.filter((element,index)=>{
      return element.event!==event
    })
    seteventdetails(filteredevent); 
  }
  useEffect(()=>{
    localStorage.setItem('eventdetails',JSON.stringify(eventdetails));
  },[eventdetails])
  return (
    <>
    <Navbar/>
    <div id="tablecontainer">
    <table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Event</th>
      <th>Delete entry</th>
    </tr>
  </thead>
  <tbody>
    <Tableentries entries={eventdetails} deletetableentry={deletetableentry}/>
  </tbody>
</table>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div id="addnewentry">
      <h3>Add new entry :</h3>
      <br />
      <form>
        <input type="date" name="date" placeholder='Enter a date' onChange={handletextchange} value={date}/>
        <textarea name="event" id="" cols="37" rows="5" placeholder='Enter event details...' onChange={handletextareachange} value={event}/>
      </form>&nbsp;
    <button className='button-18' onClick={handleformsubmit} type='submit'>Add</button>
    </div>
    </div>
    </>
  )
}

export default Calendar

