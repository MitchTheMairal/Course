// Console Crafting System ~ 6/22/21; June 22, 2021

const Prompt = require('prompt-sync')()

let Iron = 69
let Wood = 69
let Rope = 69

const Inventory = [ Iron, Wood, Rope ]

const Styled_Border = "-".repeat(41)
const Styled_Text_Border_1 = "-".repeat(15)
// const Styled_Text_Border_2 = "-".repeat(12)
const Spaces = "\ ".repeat(11)
const Tools_Border = '\n' + Styled_Text_Border_1 + ' [ Tools ] ' + Styled_Text_Border_1 + '\n'
// const Ingredients_Border = '\n' + Styled_Text_Border_2 + ' [ Ingredients ] ' + Styled_Text_Border_2 + '\n'

while (true) {
    console.log(Styled_Border + '\n' + Spaces + 'I - Open Inventory' + '\n' + Spaces + 'C - Craft' + '\n' + Spaces + 'R - Reset Ingredients' + '\n' + Spaces + 'Q - Quit' + '\n' + Styled_Border)

    const What_To_Do = Prompt('Pick an action to do: ')
    if (What_To_Do.toLowerCase() === 'i') {
        // console.log(Ingredients_Border)

        // console.log('Irons:', Inventory[0])
        // console.log('Woods:', Inventory[1])
        // console.log('Ropes:', Inventory[2])

        const Items = Inventory.slice(3).join('\n')
        const Show_Inventory = Tools_Border + '\n' + Items + '\n'
        
        console.log(Items === '' ? Tools_Border + '\n' + 'You don\'t have any tools yet.' + '\n' : Show_Inventory)
    }
    if (What_To_Do.toLowerCase() === 'c') {
        console.log('')
        console.log(Styled_Border + '\n' + Spaces + '1 - Iron Pickaxe' + '\n' + Spaces + '2 - Iron Axe' + '\n' + Spaces + '3 - Iron Sword' + '\n' + Spaces + '4 - Shield' + '\n' + Spaces + '5 - Iron Sickle' + '\n' + Spaces + '6 - Iron Katana' + '\n' + Styled_Border)
        
        const What_To_Craft = Prompt('What do you want to craft? ')
        switch (parseInt(What_To_Craft)) {
            case 1:
                console.log('')

                if (Iron < 6 || Wood < 10 || Rope < 10) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 6 && Wood >= 10 && Rope >= 10) {
                    Start_Crafting(6, 10, 10, 'Iron Pickaxe')
                }
                break;
            case 2:
                console.log('')

                if (Iron < 4 || Wood < 10 || Rope < 8) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 4 && Wood >= 10 && Rope >= 8) {
                    Start_Crafting(4, 10, 8, 'Iron Axe')
                }
                break;
            case 3:
                console.log('')

                if (Iron < 8 || Wood < 7 || Rope < 7) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 8 && Wood >= 7 && Rope >= 7) {
                    Start_Crafting(8, 7, 7, 'Iron Sword')
                }
                break;
            case 4:
                console.log('')

                if (Iron < 12 || Wood < 20) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 12 && Wood >= 20) {
                    Start_Crafting(12, 20, 0, 'Shield')
                }
                break;
            case 5:
                console.log('')

                if (Iron < 8 || Wood < 5 || Rope < 5) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 8 || Wood >= 5 || Rope >= 5) {
                    Start_Crafting(8, 5, 5, 'Iron Sickle')
                }
                break;
            case 6:
                console.log('')
                
                if (Iron < 16 || Wood < 10) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 16 || Wood >= 10) {
                    Start_Crafting(16, 10, 0, 'Iron Katana')
                }
                break;
        }
    }
    if (What_To_Do.toLowerCase() === 'r') {
        Iron = 69
        Wood = 69
        Rope = 69

        console.log('\n' + '[Your] Ingredients has been reset.' + '\n')
    }
    if (What_To_Do.toLowerCase() === 'q') {
        return false
    }
}

function Start_Crafting(Amount_1, Amount_2, Amount_3, Received_Item) {
    const Crafted_Item = Craft(Iron, Wood, Rope, parseInt(Amount_1), parseInt(Amount_2), parseInt(Amount_3))
    Iron = Crafted_Item.Iron
    Wood = Crafted_Item.Wood
    Rope = Crafted_Item.Rope
    const Item = String(Received_Item)

    Inventory.push(Item)
    // console.log(Inventory)

    console.log('Irons:', Iron)
    console.log('Woods:', Wood)
    console.log('Ropes:', Rope)
    console.log('\n' + 'You obtained an:', Item + '\n')
}
function Craft(Iron, Wood, Rope, Amount_1, Amount_2, Amount_3) {
    if (Iron === 0 || Wood === 0 || Rope === 0) return;
    
    const Return = {
        Iron: Iron - Amount_1,
        Wood: Wood - Amount_2,
        Rope: Rope - Amount_3
    }
        
    return Return
}