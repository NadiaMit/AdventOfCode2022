import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

let result1 = 0
let result2 = 0

function isFullyContained(a, b){
    const [underA, overA] = [parseInt(a.split('-')[0]), parseInt(a.split('-')[1])]
    const [underB, overB] = [parseInt(b.split('-')[0]), parseInt(b.split('-')[1])]

    return (underA <= underB && overA >= overB) || (underA >= underB && overA <= overB)
}

function overlap(a, b){
    const [underA, overA] = [parseInt(a.split('-')[0]), parseInt(a.split('-')[1])]
    const [underB, overB] = [parseInt(b.split('-')[0]), parseInt(b.split('-')[1])]

    return !(overA < underB || underA > overB) 
}

input.forEach((line) => {

    if(isFullyContained(...line.split(','))){
        result1++
    }
    if(overlap(...line.split(','))){
        result2++
    }
})

console.log("part 1:", result1)
console.log("part 2:", result2)