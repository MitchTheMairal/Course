// Unnamed Trick - Increment String. ~ 6/13/21; June 13, 2021

const Length = 40

console.log(Increment_String("-", Length))
function Increment_String(String, Length) {
    const String_To_Increment = []
    String_To_Increment[1 * Length] = String
    
    let Result = ""
    for (let i = 0; i < Length; i++) {
        Result += String_To_Increment[1 * Length]
    }
    
    return Result
}