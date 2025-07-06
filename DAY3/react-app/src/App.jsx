import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Any Name");


  return (
    <>
      <div>{name}</div>
      <input type="text" name="usrname" id="usrname"  onChange={e => setName(e.target.value)}/>
      <button onClick={()=>setName(name)}>Change Name</button>
    </>
  )
}

export default App
