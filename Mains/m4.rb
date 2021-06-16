# Ruby - Increment String ~ 6/16/21; June 16, 2021

def Increment_String(string, length)
    length = length.to_i
    string_to_increment = {}
    string_to_increment[1 * length] = string
    
    result = ""
    
    i = 0
    while i < length do
        i += 1
        result += string_to_increment[1 * length]
    end
    
    return result
end

puts Increment_String("-", 10)