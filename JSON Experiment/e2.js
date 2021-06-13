// JSON Response Time Experiment ~ 6/7/21; June 7, 2021

const fs = require('fs')

const Experiment_Storage = fs.readFileSync('Experiment.json', 'utf-8')
const Experiment = JSON.parse(Experiment_Storage.toString())

const Data = Experiment.find(Experiment => {
    return Experiment.Data_ID === 121
})
console.log(Data.Data_ID)