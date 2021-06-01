const balance = '100'
const bal = parseInt(balance)

const lossMoney = bal - bal
//Works: console.log(lossMoney)

const victoryMoney = bal * 2 
//Works: console.log(victoryMoney)

const Initializing = [ 
    winmsg = 'you won',
    losemsg = 'you didnt win anything'
]
const Finalized = Initializing[Math.floor(Math.random() * Initializing.length)]

if(Finalized === winmsg) return console.log(winmsg, victoryMoney)
if(Finalized === losemsg) return console.log(losemsg, lossMoney)