import React , { useState, useEffect } from 'react'
const axios = require('axios').default;


export default function Exercise2() {
  const [users,setUsers] = useState([])

  useEffect( () => {
    axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results)
    })
  },[])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(u => <div>
          <p>{u.name.first}</p>
          <p>{u.name.last}</p>
          <img src={u.picture.medium}></img>
        </div>)}
      </div>
    </div>
  )
}