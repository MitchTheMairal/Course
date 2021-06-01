// 4/10/21; April 10, 2021

const fs = require('fs')

const Diaries_Storage = fs.readFileSync('diaries.json', 'utf8')
const Diaries = JSON.parse(Diaries_Storage.toString())

const Page = '4'
if(Page === '') return console.log('You need to provide an existing page number.')

const Found_Page = Diaries.find(pages => {
    return pages.page === `${Page}`
})
if(!Found_Page) return console.log('There is no page with that page number is in your diary.')

console.table(Found_Page)