import requests
import json 

api = '''
        {
    "data" :[{
       "id":1,
       "name" : "madhuri"
    },{
        "id":2,
        "name":"esha"
    },{
        "id":4,
        "name": "latha"
    },{
        "id":3,
        "name":"rama"
    }]
}'''

# res = requests.get(api)
res = json.loads(api)

result = sorted(res['data'], key=lambda x:x['id'])





print(result)