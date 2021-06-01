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
const Species = [
    'Cat',
    'Felour',
    'Unknown',
    'Moonlight Huskey/Wolf',
    '3 Tailed Fox'
]
const Pronouns = [ 'His', 'Her' ]
const RandomNames = Names[Math.floor(Math.random() * Names.length)]
const RandomAges = Ages[Math.floor(Math.random() * Ages.length)]
const RandomSpecies = Species[Math.floor(Math.random() * Species.length)]
const RandomPronouns = Pronouns[Math.floor(Math.random() * Pronouns.length)]

//Object
const user = {
    name: RandomNames,
    age: RandomAges,
    species: RandomSpecies,
    pronoun: RandomPronouns
}
const { name, age, species, pronoun } = user

//Function
function Rune(name, age, species) {
    if(isNaN(age)) {
        throw new ReferenceError(`${age} is an invalid input.`)
    }
    if(!species) {
        throw new ReferenceError(`You have to leave an input for species.`)
    }
    console.log(`Hi i'm ${name} i'm ${age} and i am a ${species}`)
}

console.log(`${pronoun} name is ${name}, he's ${age}, and his species are ${species}`)

Rune('Luna', '14', '3 Tailed Tiger Fox')