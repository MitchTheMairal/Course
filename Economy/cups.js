//
const number1 = Math.floor(Math.random() * 3)+1;
const number2 = Math.floor(Math.random() * 3)+1;
if(number1 === number2) return console.log('First step: Win')
if(number1 !== number2) return console.log('Second Step: Lose')

/* Early Code for CUPS
Wrong Cup
 const number1 = 1;
 const number2 = 3;
 if(number1 === number2) return console.log('First step: Win')
 if(number1 !== number2) return console.log('Second Step: Lose')

Correct Cup
const number3 = 3;
const number4 = 3;
if(number1 === number2) return console.log('First step: Win')
if(number1 !== number2) return console.log('Second Step: Lose')
*/ 