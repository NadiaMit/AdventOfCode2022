import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

const capitalLetters = 38
const lowerLetters= 96

function calculateLetter(letter){
    if(letter == letter.toUpperCase()){
        return parseInt(letter.charCodeAt(0) - capitalLetters)
    }
    else if(letter == letter.toLowerCase()){
        return parseInt(letter.charCodeAt(0) - lowerLetters)
    }
}

function part1(){
    let sum = 0;
    let sameLetter = ''
    let first = ''
    let second = ''

    input.forEach(line => {
        [first, second] = [line.slice(0, line.length/2), line.slice(line.length/2)]
        sameLetter = Helper.checkSameLetter(first, second)
        
        sum += calculateLetter(sameLetter)
    })
    
    return sum
}

function part2(){
    let sum = 0;
    let sameLetter = ''
    let first = ''
    let second = ''
    let third = ''

    for(let i = 0; i < input.length; i+=3){
        [first, second, third] = [input[i], input[i+1], input[i+2]]
        sameLetter = Helper.checkSameLetter(first, second, third)

        sum += calculateLetter(sameLetter)
    }

    return sum
}

console.log("part 1:", part1())
console.log("part 2:", part2())