var api = 'http://localhost:3000/data'

// json-server --watch db.json

import fetch from 'node-fetch'

fetch(api)
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    json.sort((a, b) => {
      if (parseInt(a.id) > parseInt(b.id)) {
        return 1
      } else if (parseInt(a.id) < parseInt(b.id)) {
        return -1
      } else {
        return 0
      }
    })
    console.log(json)
  })
  .catch((err) => {
    console.log('Error!')
  })
// }
