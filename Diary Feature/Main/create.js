// 4/10/21; April 10, 2021

const fs = require('fs')

const Diaries_Storage = fs.readFileSync('./Storage/diaries.json', 'utf8')
const Diaries = JSON.parse(Diaries_Storage.toString())

const Time_Of_Submission = new Date().toLocaleTimeString()

const Month_Of_Submission = new Date().toLocaleString('default', { month: 'long' })
const Day_Of_Submission = new Date().toLocaleString('default', { day: '2-digit' })
const Year_Of_Submission = new Date().getFullYear()

const Page = '4'
if(Page === '') return console.log('You need to provide an existing page number.')

const All_Pages = Diaries.filter(authors => {
    return authors.author === 'Not me'
})

const Page_Number = All_Pages.sort()
console.log(Page_Number.length)

Diaries.push({
    author: 'Not me',
    title: 'First Diary',
    content: 'Today is the day i wrote this.',
    date: `On ${Month_Of_Submission} ${Day_Of_Submission}, ${Year_Of_Submission} At ${Time_Of_Submission}`,
    page: `${parseInt(Page_Number.length) + 1}`
});

const New_Submission = JSON.stringify(Diaries, null, 4)
fs.writeFileSync('./Storage/diaries.json', New_Submission)

console.table(New_Submission)