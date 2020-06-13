import React , { useState } from 'react'

export default function SpotCheck2() {
  const [isLoading,setLoading] = useState(false);
  const [lesson,setLesson] = useState({ name: 'React Hooks', completed: false, started: false });

  const updateLesson =  (key) =>  {
    const les = lesson;
    les[key] = true
    setLesson(les)
  }

  const StartLesson = () => updateLesson("started")

  const CompleteLesson = () => updateLesson("completed")



  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading ? <div>Page is loading...</div> :  <div>
          <p>{lesson.name}</p> 
          <p> Lesson status: {lesson.completed ?  "Completed" : lesson.started ? "In Progress" : "Not Started" }</p> 
          </div>}
        <button onClick={StartLesson}>Begin Lesson </button>
        <button onClick={CompleteLesson}>Complete Lesson  </button>
      </div>
    </div>
  )
}