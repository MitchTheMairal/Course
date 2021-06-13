# Python Classes ~ 6/12/21; June 12, 2021

class OC:
    def __init__(OC, Name, ID, Age, Gender):
        OC.Name = Name
        OC.ID = ID
        OC.Age = Age
        OC.Gender = Gender
    
    def get_info(OC):
        return [OC.Name, OC.ID, OC.Age, OC.Gender]
    
    def get_name(OC):
        return OC.Name
        
    def get_id(OC):
        if OC.ID == None:
            raise TypeError("The ID of your OC cannot be empty or none.")
        elif type(OC.ID) != int:
            raise TypeError("The ID of your OC has to be an integer/number.")
        
        return OC.ID
    
    def get_age(OC):
        if OC.Age == None:
            return None
        elif type(OC.Age) != int:
            raise TypeError("The Age of your OC has to be an integer/number.")
        
        return OC.Age
    
    def get_gender(OC):
        return OC.Gender
        
    def add_oc(OC, Storage):
        Storage.append(
            {
                "Name": OC.get_name(),
                "ID": OC.get_id(),
                "Age": OC.get_age(),
                "Gender": OC.get_gender()
            }
        )
        return Storage
  
    
OC = OC("Rune", 1, 15, "Male")

# (Rune, 1, 15, "Male")
print(OC.get_info())

# Rune
print(OC.get_info()[0])

# Rune
print(OC.get_name())
# 1
print(OC.get_id())
# 15
print(OC.get_age())
# Male
print(OC.get_gender())

Storage = []
OC.add_oc(Storage)

print(Storage)