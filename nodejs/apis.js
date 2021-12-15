// import express from express
var express = require("express");
// import fetch from 'node-fetch'
// https://stackoverflow.com/questions/69224406/how-can-i-resolve-err-require-esm-error-when-using-this-simple-node-fetch-query
var fetch = require("node-fetch");
// const axios = require('axios')
var app = express();

// require(dot.env).config()

// app.use(express.json())
// app.use(express.urlencoded({extended : true}))

var api = "http://localhost:3000/data";

app.get("/", (req, res) => {
    fetch(api)
        .then((resi) => {
            return resi.json();
        })
        .then((json) => {
            json.sort((a, b) => {
                if (parseInt(a.id) > parseInt(b.id)) {
                    return 1;
                } else if (parseInt(a.id) < parseInt(b.id)) {
                    return -1;
                } else {
                    return 0;
                }
            });
            console.log(json);
        });
});

// axios.get(api).then(()=>{
//     return res.json();
// }).then((json)=>{
//     json.sort(a,b){
//         if(parseInt(a.id)>parseInt(b.id)){

//         }
//     }
// })

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`This port is listening at ${PORT}`));
