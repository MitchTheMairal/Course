// 4/10/21; April 10, 2021

const fs = require('fs')

const Diaries_Storage = fs.readFileSync('diaries.json', 'utf8')
const Diaries = JSON.parse(Diaries_Storage.toString())

const Time_Of_Submission = new Date().toLocaleTimeString()
const Date_Of_Submission = new Date().toLocaleDateString()

const Page = '1'
if(Page === '') return console.log('You need to provide an existing page number.')

const Found_Page = Diaries.find(pages => {
    return pages.page === `${Page}`
})
if(!Found_Page) return console.log('There is no page with that page number is in your diary.')

const Updated_Title = Found_Page.title = 'New Title'
const Updated_Content = Found_Page.content = 'New Content: This is the day i updated this'
const Updated_Date = Found_Page.updated = `Updated on ${Date_Of_Submission} at ${Time_Of_Submission}`
const Updated_Page_Of_Diary = Updated_Title && Updated_Content && Updated_Date

const Updated_Page = JSON.stringify(Updated_Page_Of_Diary, null, 4)
fs.writeFileSync('diaries.json', Updated_Page)

const Updated = JSON.stringify(Diaries, null, 4)
fs.writeFileSync('diaries.json', Updated)

console.table(Diaries)