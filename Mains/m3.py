# Python - Increment String ~ 6/16/21; June 16, 2021

def Increment_String(String, Length):
    Length = int(Length)
    String_To_Increment = {}
    String_To_Increment[1 * Length] = String
    
    Result = ""
    
    i = 0
    while i < Length:
        i += 1
        Result += String_To_Increment[1 * Length]
        
    return Result

print(Increment_String("-", 10))