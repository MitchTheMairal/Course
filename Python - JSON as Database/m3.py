# Adding/Creating Data - HARDEST ONE I'VE ACHIEVED

import json

Name = input("What's the name of your OC? ")
Gender = input("What's the gender of your OC? ")
Age = input("What's the age of your OC? ")

def write_json(data, filename="OCs.json"):
    with open (filename, "w") as f:
        json.dump(data, f, indent=4)

with open ('OCs.json') as OC_Storage:
    OCs_Data = json.load(OC_Storage)
    Author = OCs_Data["Mitch The Mairal"]
    if Author is None:
        OC = {
            "Mitch The Mairal": [
                {
                    "name": Name,
                    "gender": Gender,
                    "age": Age
                }
            ]
        }
        OCs_Data.append(OC)
    else:
        OC = {
            "name": Name,
            "gender": Gender,
            "age": Age
        }

        Author.append(OC)

write_json(OCs_Data)