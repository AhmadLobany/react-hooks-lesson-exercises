import React, { useState, useEffect } from 'react'


export default function SpotCheck3() {
  // your code here
  const [likes,setLikes] = useState(0)

  const addLike = () => setLikes(likes+1)

  useEffect(() => {
    document.title = "You Got  " + likes
  })
 

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <div>My post</div>
        <button onClick={addLike}>Like</button>
      </div>
    </div>
  )
}