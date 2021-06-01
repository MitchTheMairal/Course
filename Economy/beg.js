const Simple = require('simplified-javascript')

const Peoples = require('../Exports/Peoples')

const People = Simple.randomElement(Peoples)
const Chosed = People.name
const Message = People.message
const Money = People.money
const Avatar = People.avatar

console.log(Chosed)
console.log(Message)
console.log(Money)
console.log(Avatar)