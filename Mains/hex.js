const Color = '#c98aff'

if(Color.includes('#') && isNaN(Color.substr(1, 1))) return console.log('Not a hex.')

console.log('Is a color.')