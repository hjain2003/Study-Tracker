import React from 'react'

const Features = () => {
  return (
    <div id="maindiv">
      <a href="Subject.js"><div id="subjects" className="cards"><img src="https://img.icons8.com/office/160/000000/making-notes.png"/>
      <span class="imgbottom"> Notemaker</span>
      </div></a>
      <a href="Todo.js"><div id="todolist" className="cards"><img src="https://img.icons8.com/fluency/160/null/tasklist.png"/>
      <span class="imgbottom"> To-do-List</span>
      </div></a>
      <a href="Calendar.js"><div id="dates" className="cards"><img src="https://img.icons8.com/color/160/null/calendar--v1.png"/>
      <span class="imgbottom">Date Planner</span>
      </div></a>

      <a href="Stopwatch.js"><div id="stopwatch" className="cards"><img src="https://img.icons8.com/office/160/null/timer.png"/>
      <span class="imgbottom">Stopwatch</span>
      </div></a>

      <a href="Motivation.js"><div id="motivation" className="cards"> <img src="https://img.icons8.com/color/160/null/ambition.png"/>
      <span class="imgbottom">Motivation</span>
      </div></a>
    </div> 
  )
}

export default Features
