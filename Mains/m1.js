const Names = [
    'Nicky',
    'Rune',
    'Stella',
    'Jenny',
    'Remon'
]
const Ages = [
    '13',
    '14',
    '15',
    '14',
    '14'
]
const _Species_ = [
    'Cat',
    'Felour',
    'Unknown',
    'Moonlight Huskey/Wolf',
    '3 Tailed Fox'
]
const Pronouns = [ 'His', 'Her' ]
const Random_Names = Names[Math.floor(Math.random() * Names.length)]
const Random_Ages = Ages[Math.floor(Math.random() * Ages.length)]
const Random_Species = _Species_[Math.floor(Math.random() * _Species_.length)]
const Random_Pronouns = Pronouns[Math.floor(Math.random() * Pronouns.length)]

// Object

const User = {
    Name: Random_Names,
    Age: Random_Ages,
    Species: Random_Species,
    Pronoun: Random_Pronouns
}
const { Name, Age, Species, Pronoun } = User

// Function

function Rune(Name, Age, Species) {
    if(isNaN(Age)) {
        throw new ReferenceError(`${Age} is an invalid input.`)
    }
    if(!Species) {
        throw new ReferenceError(`You have to leave an input for species.`)
    }
    console.log(`Hi i'm ${Name} i'm ${Age} and i am a ${Species}.`)
}

// console.log(`${Pronoun} name is ${Name}, he's ${Age}, and his species is a ${Species}.`)

Rune('Luna', '14', '3 Tailed Tiger Fox')