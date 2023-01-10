import React from 'react'

const Tableentries = ({entries,deletetableentry}) => {

  return (
    entries.sort((a,b)=>a.date>b.date? 1:-1).map(entry=>(
        <tr>
            <td>{entry.date}</td>
            <td>{entry.event}</td>
            <td><button id="cross" onClick={()=>deletetableentry(entry.event)}>X</button></td>
        </tr>
    ))
  )
}

export default Tableentries
