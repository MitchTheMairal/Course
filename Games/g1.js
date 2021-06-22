// Console Crafting System ~ 6/22/21; June 22, 2021

const Prompt = require('prompt-sync')()

let Iron = 69
let Wood = 69
let Rope = 69

const Inventory = [ Iron, Wood, Rope ]

const Styled_Border = "-".repeat(41)
const Styled_Text_Border_1 = "-".repeat(15)
const Styled_Text_Border_2 = "-".repeat(12)
const Spaces = "\ \ \ \ \ \ \ \ \ \ \ "
const Tools_Border = '\n' + Styled_Text_Border_1 + ' [ Tools ] ' + Styled_Text_Border_1 + '\n'
const Ingredients_Border = '\n' + Styled_Text_Border_2 + ' [ Ingredients ] ' + Styled_Text_Border_2 + '\n'

while ((Iron, Wood, Rope) !== 0) {
    console.log(Styled_Border + '\n' + Spaces + 'I - Open Inventory' + '\n' + Spaces + 'C - Craft' + '\n' + Spaces + 'R - Reset Ingredients' + '\n' + Spaces + 'Q - Quit' + '\n' + Styled_Border + '\n')

    const What_To_Do = Prompt('Pick an action to do: ')
    if (What_To_Do.toLowerCase() === 'i') {
        console.log(Ingredients_Border)

        console.log('Irons:', Inventory[0])
        console.log('Woods:', Inventory[1])
        console.log('Ropes:', Inventory[2])

        const Items = Inventory.slice(3).join('\n')
        const Show_Inventory = Tools_Border + '\n' + Items + '\n'
        
        console.log(Items === '' ? Tools_Border + '\n' + 'None' + '\n' : Show_Inventory)
    }
    if (What_To_Do.toLowerCase() === 'c') {
        console.log('')

        const What_To_Craft = Prompt('What do you want to craft? ')
        switch (parseInt(What_To_Craft)) {
            case 1:
                if (Iron < 6 || Wood < 10 || Rope < 10) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 6 && Wood >= 10 && Rope >= 10) {
                    console.log('Crafting a pickaxe...' + '\n')
                
                    const Pickaxe = Craft(Iron, Wood, Rope, 6, 10, 10)
                    Iron = Pickaxe.Iron
                    Wood = Pickaxe.Wood
                    Rope = Pickaxe.Rope
                    const Iron_Pickaxe = 'Iron Pickaxe'
        
                    Inventory.push(Iron_Pickaxe)
                    // console.log(Inventory)
                
                    console.log('Irons:', Iron)
                    console.log('Woods:', Wood)
                    console.log('Ropes:', Rope)
                    console.log('\n' + 'You obtained an:', Iron_Pickaxe + '\n')
                }
                break;
            case 2:
                if (Iron < 4 || Wood < 10 || Rope < 8) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 4 && Wood >= 10 && Rope >= 8) {
                    console.log('Crafting an axe...' + '\n')
                
                    const Axe = Craft(Iron, Wood, Rope, 4, 10, 8)
                    Iron = Axe.Iron
                    Wood = Axe.Wood
                    Rope = Axe.Rope
                    const Axe_Pickaxe = 'Iron Axe'
        
                    Inventory.push(Axe_Pickaxe)
                
                    console.log('Irons:', Iron)
                    console.log('Woods:', Wood)
                    console.log('Ropes:', Rope)
                    console.log('\n' + 'You obtained an:', Axe_Pickaxe + '\n')
                }
                break;
            case 3:
                if (Iron < 8 || Wood < 7 || Rope < 7) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 8 && Wood >= 7 && Rope >= 7) {
                    console.log('Crafting a sword...' + '\n')
                
                    const Sword = Craft(Iron, Wood, Rope, 8, 7, 7)
                    Iron = Sword.Iron
                    Wood = Sword.Wood
                    Rope = Sword.Rope
                    const Iron_Sword = 'Iron Sword'
        
                    Inventory.push(Iron_Sword)
                
                    console.log('Irons:', Iron)
                    console.log('Woods:', Wood)
                    console.log('Ropes:', Rope)
                    console.log('\n' + 'You obtained an:', Iron_Sword + '\n')
                }
                break;
            case 4:
                if (Iron < 12 || Wood < 20) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 12 && Wood >= 20) {
                    console.log('Crafting a shield...' + '\n')
                
                    const Shield = Craft(Iron, Wood, Rope, 12, 20, 0)
                    Iron = Shield.Iron
                    Wood = Shield.Wood
                    Rope = Shield.Rope
                    const _Shield_ = 'Shield'
        
                    Inventory.push(_Shield_)
                
                    console.log('Irons:', Iron)
                    console.log('Woods:', Wood)
                    console.log('Ropes:', Rope)
                    console.log('\n' + 'You obtained an:', _Shield_ + '\n')
                }
                break;
            case 5:
                if (Iron < 8 || Wood < 5 || Rope < 5) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 8 || Wood >= 5 || Rope >= 5) {
                    console.log('Crafting a shield...' + '\n')
                
                    const Sickle = Craft(Iron, Wood, Rope, 8, 5, 5)
                    Iron = Sickle.Iron
                    Wood = Sickle.Wood
                    Rope = Sickle.Rope
                    const Iron_Sickle = 'Iron Sickle'
        
                    Inventory.push(Iron_Sickle)
                
                    console.log('Irons:', Iron)
                    console.log('Woods:', Wood)
                    console.log('Ropes:', Rope)
                    console.log('\n' + 'You obtained an:', Iron_Sickle + '\n')
                }
                break;
            case 6:
                if (Iron < 16 || Wood < 10) {
                    console.log('\n' + 'You don\'t have enough ingredients.' + '\n')
                }
                if (Iron >= 16 || Wood >= 10) {
                    console.log('Crafting a shield...' + '\n')
                
                    const Katana = Craft(Iron, Wood, Rope, 8, 5, 5)
                    Iron = Katana.Iron
                    Wood = Katana.Wood
                    Rope = Katana.Rope
                    const Iron_Katana = 'Iron Katana'
        
                    Inventory.push(Iron_Katana)
                
                    console.log('Irons:', Iron)
                    console.log('Woods:', Wood)
                    console.log('Ropes:', Rope)
                    console.log('\n' + 'You obtained an:', Iron_Katana + '\n')
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
        Iron = 0
        Wood = 0
        Rope = 0
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
}