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


console.log("part 1:", part1())
console.log("part 2:", part2())