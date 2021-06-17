# Python - Basic Infinite Multi-choice Game | Guess The Ingredient ~ 6/17/21; June 17, 2021

import random
from Functions import Functions

Ingredients = [
    "Aurora Bark", "Syvia Bark", "Glitter Fruit", "Mythical Wing",
    "Airaial Leaf", "Mithril", "Iron", "Jade", "Ruby", "Stone",
    "Seraphrite", "Pixel Shard", "Remolight Shard",
    "Runarphic Shard", "Amber", "Amber Shard", "Split Shroom",
    "Seashroom", "Gloo Shroom", "Bloodshroom", "Float Shroom",
    "Blow Core", "Cloudball", "Rainball", "Hole Bark", "Floader",
    "Cloudshroom", "Glimmer Kelp", "Mirthbloom", "Mirth Stem"
]
Chosen_Ingredient = random.choice(Ingredients)
print(Chosen_Ingredient)

Correct_Answer_Count = 0
Incorrect_Answer_Count = 0
Incorrect_Count = 0

Positions = [ 1, 2, 3 ]

while True:
    if Incorrect_Count == 3:
        print("\n" + "Game Over. You have answered " + str(Correct_Answer_Count) + " questions correctly, and " + str(Incorrect_Answer_Count) + " questions answered incorrectly.")
        break

    Incorrect_Answer_1 = random.choice(Ingredients)
    Incorrect_Answer_2 = random.choice(Ingredients)
    Incorrect_Answer_3 = random.choice(Ingredients)

    Correct_Answer_Position = random.choice(Positions)

    Styled_Border = Functions.Increment_String("-", 48)
    print("\n" + Styled_Border + "\n" + 'An Ingredient has been chosen, pick your answer.' + "\n" + Styled_Border + "\n")
    print((Chosen_Ingredient if Correct_Answer_Position == 1 else Incorrect_Answer_1) + " | " + (Chosen_Ingredient if Correct_Answer_Position == 2 else Incorrect_Answer_2) + " | " + (Chosen_Ingredient if Correct_Answer_Position == 3 else Incorrect_Answer_3) + "\n")
    print(Styled_Border + "\n" + "Enter \"Stop\" if you want to end or stop the game." + "\n")
    
    Chosen_Answer = input()
    # print(Chosen_Answer)

    # Correct Answer
    if Chosen_Ingredient == Chosen_Answer:
        Correct_Answer_Count = Functions.Increment(Correct_Answer_Count)
        Incorrect_Count = 0 if Incorrect_Count == 0 else Functions.Decrement(Incorrect_Count)

        # print(Correct_Answer_Count)
        # print(Incorrect_Count)
        
        Chosen_Ingredient = random.choice(Ingredients)

        Incorrect_Answer_1 = random.choice(Ingredients)
        Incorrect_Answer_2 = random.choice(Ingredients)
        Incorrect_Answer_3 = random.choice(Ingredients)

        Correct_Answer_Position = random.choice(Positions)

        print(Chosen_Ingredient)
        print("\n" + "Correct. The Ingredient is " + str(Chosen_Ingredient) + ".\nYou have " + str(Correct_Answer_Count) + " questions answered correctly.")

    # Incorrect Answer
    elif Chosen_Ingredient != Chosen_Answer:
        if (Chosen_Answer == "Stop"):
            print('Game has been cancelled. You have answered ' + str(Correct_Answer_Count) + ' questions correctly, and ' + str(Incorrect_Answer_Count) + ' questions incorrectly.')
            break

        Incorrect_Count = Functions.Increment(Incorrect_Count)
        Incorrect_Answer_Count = Functions.Increment(Incorrect_Answer_Count)
        Chosen_Ingredient = random.choice(Ingredients)

        Incorrect_Answer_1 = random.choice(Ingredients)
        Incorrect_Answer_2 = random.choice(Ingredients)
        Incorrect_Answer_3 = random.choice(Ingredients)

        Correct_Answer_Position = random.choice(Positions)

        print("\n" + "Incorrect. The Ingredient is " + str(Chosen_Ingredient) + ".\nYou have " + str(Incorrect_Answer_Count) + " questions answered incorrectly.")

    print(Chosen_Ingredient)