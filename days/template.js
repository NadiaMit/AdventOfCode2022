import Helper from '../helpers.js'

function preparation (input){

    return 0
}

function part1(input){
    preparation(input)
    

    return 0
}

function part2(input){
    preparation(input)


    return 0
}

const currentDayInput = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const dayInput = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDayInput)

console.log("part 1:", part1(dayInput))
console.log("part 2:", part2(dayInput))