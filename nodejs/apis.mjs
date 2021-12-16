// https://blog.logrocket.com/es-modules-in-node-today/
var api = "http://localhost:3000/data";
import fetch from 'node-fetch'

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
        }).catch((err)=>{
            console.log("Error")
        })
