import React, { useContext } from 'react'
import { AuthContext } from './AuthContext';

export const LoginPage = () => {
    const {username, password, setUsername,setPassword,login}=
    useContext(AuthContext)
  return (
    <div>
        <h1>Login page</h1>
        <input type="text" placeholder='Enter username' value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        />
        <br/>
        <input type='password' placeholder='Enter Password' value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        />
        <br/>
        <button onClick={login}>Login</button>
    </div>
  )
}


export default LoginPage;