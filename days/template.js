import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

function preparation (){

    return 0
}

function part1(){
    preparation()
    

    return 0
}

function part2(){
    preparation()


    return 0
}

//check performance
console.time('time part 1')
const result1 = part1()
console.timeEnd('time part 1')
console.time('time part 2')
const result2 = part2()
console.timeEnd('time part 2')

console.log("part 1:", result1)
console.log("part 2:", result2)