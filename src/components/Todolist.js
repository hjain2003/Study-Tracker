import React from 'react'

const Todolist = (props) => {

    
  return(
    <>
    <div id="makerow">
    <button id="cross" onClick={()=>{
        props.onSelect(props.id);
    }}>X</button>&nbsp;&nbsp;&nbsp;
     <li>{props.text}</li>
     </div>
     </>

  )
}

export default Todolist
