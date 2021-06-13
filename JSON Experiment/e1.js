// JSON Response Time Experiment ~ 6/7/21; June 7, 2021

const fs = require('fs')

const Experiment_Storage = fs.readFileSync('Experiment.json', 'utf-8')
const Experiment = JSON.parse(Experiment_Storage.toString())

setTimeout(() => {
    let i = 0
    while (i <= 1000) {
        Experiment.push({
            Author: 'Novanity',
            Data_ID: Experiment.length + 1
        })
        
        const New_Submission = JSON.stringify(Experiment, null, 4)
        fs.writeFileSync('Experiment.json', New_Submission)
    }
}, 1000)