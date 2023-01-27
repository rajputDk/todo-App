
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
  function removeList(id){
    const newList=[...users];
    newList.splice(id,1)
    setUsers(newList)
  }
  return (
    
  <div>
      <div className="container"> 
      <div className="heading">      
      <h1>To-Do List App</h1>  
      </div>
         <input type="text" id="input" placeholder="Add Todo" value={name} onChange={(e)=>setName(e.target.value)} /> 
          <button className="btn1" onClick={addUser}>Add</button>
         <div className="container2">

         
          <h1 className="head">
            <div container3>
            {
              users.map((user,i)=>{
                
                return(
                  
                  <h1 key={i}>{user.name}<span className="btn3">Edit</span><span className="btn2" onClick={()=>removeList(i)}>Delete</span></h1>
                )
              }) 
              
            }
            </div>
            </h1>
            </div>
      </div> 
    </div>  
  )
  }
export default App
