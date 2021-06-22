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

def Increment(Variable):
    Variable += 1
    return Variable
def Decrement(Variable):
    Variable -= 1
    return Variable