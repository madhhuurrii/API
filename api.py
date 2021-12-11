import json 
from urllib.request import urlopen
  
url = "http://localhost:3000/data"
  
api = urlopen(url)
  
res = json.loads(api.read())

# sorted_json_data = json.dumps(data_json, sort_keys=True) #error line
res.sort(key=lambda x: x['id'])

print(res)