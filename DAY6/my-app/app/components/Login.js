import React,{useState} from 'react'

function Login() {
const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form>
      <input type="text"  placeholder="Enter Name" value={username} onChange={()=>setUsername(username)}/>
      <input type="email" placeholder="Enter Email" value={email} onChange={()=> setEmail(email)}/>
      <input type="password" placeholder="Enter Password" value={password} onChange={()=> setPassword(password)}/>
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login