# The Proper Way for mapping values by keys in a List of Dictionaries ~ 6/06/21; June 6, 2021

My_OCs = [
    {
        "Author": 564145650736955402,
        "OC_Name": "Mitch",
        "OC_ID": 1,
        "OC_Avatar": "https://media.discordapp.net/attachments/839163340714409996/844421314147254362/Mitch.jpg"
    },
    {
        "Author": 564145650736955402,
        "OC_Name": "Rune",
        "OC_ID": 2,
        "OC_Avatar": "https://media.discordapp.net/attachments/837243636663975936/846657748060995624/Rune.jpg?width=610&height=610"
    },
    {
        "Author": 564145650736955402,
        "OC_Name": "Luna",
        "OC_ID": 3,
        "OC_Avatar": "https://media.discordapp.net/attachments/837243636663975936/846768163495739472/Luna.jpg?width=609&height=609"
    }
]

def get_author(Data, Author_ID):
    return [_Data_ for _Data_ in Data if _Data_["Author"] == int(Author_ID)]
_OC_ = get_author(My_OCs, 564145650736955402)

OCs = []
for OCs_ in _OC_:
    _OC = OCs_["OC_Name"]
    OCs.append(_OC)
# print(OCs) # ['Mitch', 'Rune', 'Luna']

def list_to_str(list):
    Separator = ", "
    return Separator.join(list) # For numbers, return New_Line.join([str(num) for num in list])
print(list_to_str(OCs)) # Mitch, Rune, Luna