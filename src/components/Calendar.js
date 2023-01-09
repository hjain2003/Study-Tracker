import React, { useState } from 'react'
import Navbar from './Navbar'
import data from './Mockdata.json'

// const getlocalitems=()=>{
//   let entries=localStorage.getItem('dateentry');
//   console.log(entries);

//   if(entries){
//     return JSON.parse(localStorage.getItem('dateentry'));
//   }
//   else{
//     return [];
//   }
// }

const Calendar = () => {
  const[dateevent,setdateevent]=useState(data);
  const[formdetails,setformdetails]=useState({
    date:'',
    event:''
  })

  const handleformchange=(e)=>{
    e.preventDefault();

    const fieldname=e.target.getAttribute('name');
    const fieldvalue=e.target.value;

    const newformdata={...formdetails};
    newformdata[fieldname]=fieldvalue;

    setformdetails(newformdata);
  };

  const handleformsubmit=(e)=>{
    e.preventDefault();

    const newdetail={
      date:formdetails.date,
      event:formdetails.event
    };

    const newdetails=[...dateevent,newdetail]
    setdateevent(newdetails);

    localStorage.setItem('dateentry',JSON.stringify(formdetails));
  }
  return (
    <>
    <Navbar/>
    <div id="tablecontainer">
    <table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Event</th>
    </tr>
  </thead>
  <tbody>
    {dateevent.map((val)=>(
      <tr>
        <td>{val.date}</td>
        <td>{val.event}</td>
      </tr>
    ))}
  </tbody>
</table>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div id="addnewentry">
      <h3>Add new entry :</h3>
      <br />
      <form>
        <input type="text" name="date" placeholder='Enter a date' onChange={handleformchange}/>
        <textarea name="event" id="" cols="37" rows="5" placeholder='Enter event details...' onChange={handleformchange}/>
      </form>&nbsp;
    <button className='button-18' onClick={handleformsubmit}>Add</button>
    </div>
    </div>
    </>
  )
}

export default Calendar

