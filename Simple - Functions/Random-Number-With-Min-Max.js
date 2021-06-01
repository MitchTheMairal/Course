function numberLimit(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

console.log(
    numberLimit(5, 10)
)