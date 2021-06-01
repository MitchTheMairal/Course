# Appending/Creating/Adding Data (Simplified)

import json
filename = "OCs.json"

def add_oc_data():
    data = {}
    with open (filename, "r") as f:
        _data = json.load(f)
    data["Author"] = "564145650736955402"
    data["OC_Name"] = input('Name of your OC: ')
    data["OC_Gender"] = input('Gender of your OC: ')
    data["OC_Age"] = input('Age of your OC: ')
    _data.append(data)
    with open (filename, "w") as f:
        json.dump(_data, f, indent=4)

add_oc_data()