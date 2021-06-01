# Appending Data | Do not follow this myself, go to m5.py ~ 5/7/21; May 5, 2021

import json

def write_json(data, filename="OCs.json"):
    with open (filename, "w") as f:
        json.dump(data, f, indent=4)
    
with open ("OCs.json") as OC_Storage:
    Storage = json.load(OC_Storage)
    _Author = Storage["Intense/Rune"]
    OC = {
        "name": "Airea",
        "gender": "Female",
        "age": 14
    }
    _Author.append(OC)

write_json(Storage)