import React, {useState, useEffect} from 'react'
import './App.css';
import fetch from "node-fetch"
const api = "http://localhost:3000/data"
function App() {
  const [data, setData] = useState([])
  const getData =()=>{
    fetch(api,{
      method : "GET",
      headers :{
        "Content-Type": "application/json"
      }
    }).then((res)=>{
      return res.json()
    }).then((json)=>{
      json.sort((a,b)=>{
          if(parseInt(a.id)>parseInt(b.id)){
            return 1
          }
          else if(parseInt(a.id)<parseInt(b.id)){
            return -1
          }
          else{
            return 0
          }
      })
      setData(json)
    })
  }
  useEffect(() => {
    getData()},[])
    
  return (
    <div className="App">
    <center>
    <table className="App">
      <tr>
        <th><h1>ID &nbsp;</h1></th>
        <th><h1>Name &nbsp;</h1></th>
      </tr>
      <tr>
        <td>{
         data && data.length>0 && data.map((item)=><h2>{item.id} &nbsp;</h2>)
       }</td>
       <td>
       {
         data && data.length>0 && data.map((item)=><h2>{item.name} &nbsp;</h2>)
       } 
       </td>
      </tr>
    </table>
    </center>
     {/* {
         data && data.length>0 && data.map((item)=><h2>{item.id} &nbsp; {item.name}</h2>)
       } */}
    </div>
  );
}

export default App;
