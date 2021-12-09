var express = require('express')
// const fetch = require('node-fetch')
var app = express()

// require(dot.env).config()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

var api = "http://localhost:3000/data"

// app.get('/',(req,res)=>{
    // fetch(api).then(
    //     ()=>{ return res.json();}
        
    // ).then((json)=>{
    //    json.sort((a,b)=>{
    //      if(parseInt(a.id)>parseInt(b.id)){
    //          return 1
    //      }
    //      else if(parseInt(a.id)<parseInt(b.id)){
    //          return -1
    //      }
    //      else{
    //          return 0
    //      }
    //    })
    // }).catch(err =>{
    //     return err;
    // })
    
// })


const PORT = process.env.PORT ||5000
app.listen(PORT,()=> console.log(`This port is listening at ${PORT}`))