# Editing Data

import json
filename = 'OCs.json'

def view_data():
    with open (filename, "r") as f:
        _data = json.load(f)
        i = 0
        for OCs in _data:
            Author = OCs["Author"]
            Name = OCs["OC_Name"]
            Gender = OCs["OC_Gender"]
            Age = OCs["OC_Age"]
            print (f"Index number: {i}")
            print (f"Author's ID: {Author}")
            print (f"Name of your OC:  {Name}")
            print (f"Gender of your OC:  {Gender}")
            print (f"Age of your OC:  {Age}")
            print('\n')
            i=i+1

def edit_data():
    view_data()
    new_data = []
    with open (filename, "r") as f:
        _data = json.load(f)
        data_length = len(_data)-1
    print ("Which OC would you like to edit?")
    edit_option = input(f"Select a number 0-{data_length} ")
    i=0
    for OCs in _data:
        if i == int(edit_option):
            Author = OCs["Author"]
            Name = OCs["OC_Name"]
            Gender = OCs["OC_Gender"]
            Age = OCs["OC_Age"]
            print (f"Author's ID: {Author}")
            print (f"Current Name of your OC:  {Name}")
            Name = input('Send the new name of your OC. ')
            print (f"Current Gender of your OC:  {Gender}")
            Gender = input('Send the gender of your OC. ')
            print (f"Current Age of your OC:  {Age}")
            Age = input('Send the age of your OC. ')
            new_data.append(
                {   
                    "Author": Author,
                    "OC_Name": Name,
                    "OC_Gender": Gender,
                    "OC_Age": Age
                }
            )
            i=i+1
        else:
            new_data.append(OCs)
            i=i+1
    with open (filename, "w") as f:
        json.dump(new_data, f, indent=4)
edit_data()