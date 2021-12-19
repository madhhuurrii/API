const axios = require('axios')


const  api = "http://localhost:3000/data";
 axios.get(api)
    .then((resi) => {
        return resi.data;
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
    }).catch((err)=>{
        console.log(err)
    })

// res.json(fetchApi)
   
// })
    

// const PORT = 5000

// app.listen(()=>{
//     console.log(`The app is listening at ${PORT}`)
// })