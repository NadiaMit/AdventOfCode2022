import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

function checkTouching(a, b){
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]) === 1
}

function part1(){
    let surfaces = input.length*6
    const cubes = input.map(x=>{return x.split(',').map(Number)})

    for(let i = 0; i < input.length; i++){
        for(let j = i+1; j < input.length; j++){
            checkTouching(cubes[i], cubes[j]) ? surfaces -= 2 : null
        }
    }

    return surfaces
}

function part2(){


    return 0
}

console.log("part 1:", part1())
console.log("part 2:", part2())