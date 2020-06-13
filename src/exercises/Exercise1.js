import React , { useState }  from 'react'

export default function Exercise1() {

  const countries = ['France','Spain','Germany','Sweden','Spain','United Kingdom','Finland','Greece','Italy']

  const [user,setUser] = useState('')
  const [city,setCity] = useState('')
  const [country,setCountry] = useState('')

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type='text' placeholder="name" value={user} onChange={e => setUser(e.target.value)}></input>
        <input type='text' placeholder="city" value={city} onChange={e => setCity(e.target.value)}></input>
        <select onChange={e => setCountry(e.target.value)}>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  )
}