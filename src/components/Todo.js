import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Todolist from './Todolist';

const getlocalitems=()=>{
  let list=localStorage.getItem('todos');
  console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem('todos'));
  }
  else{
    return [];
  }
}

const Todo = () => {

  const [inputlist,setinputlist]=useState("");
  const [items,setitems]=useState(getlocalitems());

  const itemevent=(e)=>{
    setinputlist(e.target.value);
  }

  const listofitems=()=>{
    setitems((olditems)=>{
      return [...olditems,inputlist];
    });
    localStorage.setItem('todos',JSON.stringify(items));
    setinputlist("");
  }
  const deleteitems=(id)=>{
        setitems((olditems)=>{
          return olditems.filter((arrele,index)=>{
              return index!==id
          })
        })
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(items));
  },[items])

  return (
    <>
    <Navbar/>
    <div id="todomaindiv">
      <div id="todobox">
        <div id="inputbtn">
          <input type="text" placeholder='Add item' id="todoitem" onChange={itemevent} value={inputlist}/>
          <button id="addbtn" onClick={listofitems}><span id="plus"><b>+</b></span></button>
        </div>
        <div id="itemsdisplay">
          <ol>
            {items.map((itemval,index)=>{
              return <Todolist key={index} id={index} text={itemval} onSelect={deleteitems}/>;
            })
            }
          </ol>
        </div>
      </div>
    </div>
    </>
  )
}

export default Todo
