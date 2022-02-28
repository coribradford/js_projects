const kelvin = 0
// constant kelvin value

let celsius = kelvin - 273
// celsius is 273 less than kelvin

let fahrenheit = Math.floor(celsius*(9/5) + 32)
// fahrenheit is calculated, then rounded down

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let newton = Math.floor(celsius * (33/100))

console.log(`The temperature is ${newton} degrees Newtons`)