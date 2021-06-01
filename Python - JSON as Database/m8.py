# Showing a Specific Data [ THIS IS VERY IMPORTANT ] ~ 5/7/21; May 7, 2021

import json
filename = 'OCs.json'

def specific_data(OC_ID):
    with open (filename, "r") as f:
        _data = json.load(f)
        # The list comprehension inside the parenthesis is the iterator, if not then it is None.
        return next((data for data in _data if data["OC_ID"] == int(OC_ID)), None)

OC = specific_data(2)
if OC is None:
    print ('There is no OC with that ID found')
else:
    print (OC["OC_Name"])
    print (OC["OC_Gender"])
    print (OC["OC_Age"])
    print (OC["OC_ID"])
    print (OC["Author"])