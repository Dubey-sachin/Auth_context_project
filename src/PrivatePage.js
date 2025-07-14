import { AuthContext } from "./AuthContext";
import React,{useContext} from "react";


export const PrivatePage = () => {
    const {user,setUse,logout}=useContext(AuthContext);
  return (
    <div>
        <h2>Welcome Page</h2><br/>
        <h2>hello {user}</h2><br/>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default PrivatePage;