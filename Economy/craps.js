const first_combination = [ 1, 2, 3, 4, 5, 6 ]
const second_combination = [ 1, 2, 3, 4, 5, 6 ]
const first_random = first_combination[Math.floor(Math.random() * first_combination.length)]
const second_random = second_combination[Math.floor(Math.random() * second_combination.length)]

setTimeout(() => {
    // Win
    if(first_random === (1 || 6), second_random === (6 || 1)) {
        return console.log('win1')
    } else if(first_random === (2 || 5), second_random === (5 || 2))  {
        return console.log('win2')
    } else if(first_random === (3 || 4), second_random === (4 || 3)) {
        return console.log('win3')
    } else if(first_random === (5 || 6), second_random === (6 || 5)) {
        return console.log('win6')
    } /*Lose*/ else if(first_random === (1), second_random === (1)) {
        return console.log(`lose ${first_random} ${second_random}`)
    } else if(first_random === 6, second_random === 6) {
        return console.log('lose')
    } else if(first_random === (2 || 1), second_random === (1 || 2)) {
        return console.log('lose')
    }
    
    const first_result = first_random + second_random
    console.log(`you rolled ${first_random} and ${second_random} you need to roll a ${first_result} to win`)

    const last_combination1 = [ 1, 2, 3, 4, 5, 6 ]
    const last_combination2 = [ 1, 2, 3, 4, 5, 6 ]
    const last_random1 = last_combination1[Math.floor(Math.random() * last_combination1.length)]
    const last_random2 = last_combination2[Math.floor(Math.random() * last_combination2.length)]

    setTimeout(() => {
        if(last_random1 + last_random2 === first_result) return console.log(`you win, you rolled a ${last_random1} and ${last_random2}.`)
        if(last_random1 + last_random2 !== first_result) return console.log(`you lose, you rolled a ${last_random1} and ${last_random2}.`)
        
    }, 5000)
}, 3000)