function Role(Role_ID, Emoji, Guild_ID) {
    this.Role_ID = Role_ID
    this.Emoji = Emoji
    this.Guild_ID = Guild_ID

    if(isNaN(Role_ID)) return new ReferenceError('Invalid Role ID')
    if(!isNaN(Emoji)) return new ReferenceError('The Emoji should not be an ID')
    if(isNaN(Guild_ID)) return new ReferenceError('Invalid Guild ID')
}

const R1 = new Role('1', '❤', '1')
// console.log(R1)

function numberLimit(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

console.log(
    numberLimit(5, 10)
)