# Writing Data

import json

# Reading JSON File
with open('OCs.json') as OCs:
    OC_Storage = json.load(OCs)
print(OC_Storage)

Name = input("What's the name of your OC? ")
Gender = input("What's the gender of your OC? ")
Age = input("What's the age of your OC? ")

OC = [
    {
        "name": f"{Name}",
        "gender": f"{Gender}",
        "age" : Age
    }
]

with open("OCs.json", "w") as OCs:
    json.dump(OC, OCs, indent = 4)