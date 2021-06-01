// 4/11/21; April 11, 2021. At approximately 12:00am

const fs = require('fs')

const Diaries_Storage = fs.readFileSync('diaries.json', 'utf8')
const Diaries = JSON.parse(Diaries_Storage.toString())

const Found_Page = Diaries.find(authors => {
    return authors.author === 'Me'
})
if(!Found_Page) return console.log('There is no page with that page number is in your diary.')

const Found_Pages = Diaries.filter(authors => {
    return authors.author === 'Me'
})
console.log(Found_Pages)
