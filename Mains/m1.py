# 5/13/21; May 5, 2021

Facts = [
    'Mutable; Cancelling the original copy and overwriting the original copy',
    'Strings are Ordered and Immutable'
]

# Exponents
10 ** 2 # 10 x 10

# No Remainder(s)
5 / 2 # 2.5
5 // 2 # 2

# Getting the remainder
5 % 2 # 1

OCs = [ 'Rune', 'Luna', 'Rea', 'Jenny', 'Mitch', 'Nicky' ]

# For loop - Break and Continue

for Names in OCs: # Rune, Luna
    if OCs == 'Rea':
        break
    # print (OCs)
for Names in OCs: # Rune, Rea, Jenny, Mitch, Nicky
    if OCs == 'Luna':
        continue
    # print (OCs)

# Colons in Indexes; copy()
Original = OCs[:] # Rune, Luna, Rea, Jenny, Mitch, Nicky
# OCs.append('Callum') = Rune, Luna, Rea, Jenny, Mitch, Nicky, Callum

# List Comprehensions - I already know this but alright.
Numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

Multi_Self = [i * i for i in Numbers] # 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
# print (Multi_Self) 

# Sets are Unordered, Mutable, No Duplicates. Is also a dictionary but without keys and values.
Odds = { 1, 3, 5, 7, 9 }
Evens = { 0, 2, 4, 6, 8, 0 }
Primes = { 2, 3, 5, 7 }

Combined = Odds.union(Evens) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
# print (Combined)

Set_1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
Set_2 = { 4, 5, 8, 9, 10 }

Has_No_Duplicates = Set_1.difference(Set_2) # 1, 2, 3, 6, 7
# print (Has_No_Duplicates)

# Lambda - lambda <Argument(s)>: <Code>... Is also similar to functions/def
Addition = lambda i, j: i + j # 1 + 2 = 3
# print (Addition(1, 2))

Exercises = [
    '#1 Even Numbers and it\'s count. Everytime time it founds an even number, it adds 1 to the count.'
]

Count = 0
for Number in range(1, 10):
    if Number % 2 == 0: # 2, 4, 6, 8
        Count += 1 # 4
        # print (Number)
# print (f"There are {Count} Even Numbers.")