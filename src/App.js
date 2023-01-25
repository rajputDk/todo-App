
import { useState } from "react"
import "./App.css"
function App() { 
  const [name,setName]=useState("");
  const [users, setUsers]=useState([]);
  const addUser =(e)=>{
    e.preventDefault();
    const user={
      name
    }
    setUsers([...users,user]);
    setName("")
  };
  return (
    
  <div>
      <div className="container"> 
      <div className="heading">      
      <h1>To-Do List App</h1>  
      </div>
         <input type="text" id="input" placeholder="Add Todo" value={name} onChange={(e)=>setName(e.target.value)} /> 
          <button className="btn1" onClick={addUser}>Add</button>
        
          <h1 className="head">
            {
              users.map(user=>{
                return(
                  <h1>{user.name}</h1>
                )
              })   
            }
            </h1>
      </div> 
    </div>  
  )
  }
export default App
