let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop() // remove last element
secretMessage.push('to', 'Program') // add to end
const easilyIndex = secretMessage.indexOf('easily') // get index for easily
secretMessage[easilyIndex] = 'right' // replace easily with right using index
secretMessage.shift() // remove first element
secretMessage.unshift('Programming') // add new first word 
secretMessage.splice(6, 5, 'know') // remove beginning at 6, remove 5 elements, replace at element 6
console.log(secretMessage.join()) // print concatenated string of elements