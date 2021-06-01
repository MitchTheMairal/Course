# Deleting Data

import json
filename = "OCs.json"

def delete_data():
    new_data = []
    with open (filename, "r") as f:
        _data = json.load(f)
        data_length = len(_data)-1
    print ("Which OC would you like to delete?")
    delete_option = input(f"Select a number 0-{data_length} ")
    i=0
    for OCs in _data:
        if i == int(delete_option):
            pass
            i=i+1
        else:
            new_data.append(OCs)
            i=i+1
    with open (filename, "w") as f:
        json.dump(new_data, f, indent=4)
delete_data()