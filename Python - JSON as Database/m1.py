# Reading Data

import json as js

args = input('What\'s the name of your OC? ')

OC = {
        "name": f"{args}",
        "gender": "Male",
        "age" : 14
    }
string = js.dumps(OC, indent = 4)
print(string)

JSON_Data = js.loads(string)
print(JSON_Data)