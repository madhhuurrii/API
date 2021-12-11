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
       {
         data && data.length>0 && data.map((item)=><p>{item.id} &nbsp;{item.name}</p>)
       }
    </div>
  );
}

export default App;
