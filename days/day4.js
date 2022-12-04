import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

function isFullyContained(a, b){
    const [underA, overA] = [parseInt(a.split('-')[0]), parseInt(a.split('-')[1])]
    const [underB, overB] = [parseInt(b.split('-')[0]), parseInt(b.split('-')[1])]

    if((underA <= underB && overA >= overB) || (underA >= underB && overA <= overB)){
        return true
    }
    return false
}

function overlap(a, b){
    const [underA, overA] = [parseInt(a.split('-')[0]), parseInt(a.split('-')[1])]
    const [underB, overB] = [parseInt(b.split('-')[0]), parseInt(b.split('-')[1])]

    for(let i= underA; i <= overA; i++){
        if(i >= underB && i <= overB){
            return true
        }
    }
    for(let i = underB; i <= overB; i++){
        if(i >= underA && i <= overA){
            return true
        }
    }
    return false
}


function part1(){
    let counter = 0

    input.forEach((line) => {
        if(isFullyContained(line.split(',')[0], line.split(',')[1])){
            counter++
        }
    })

    return counter
}

function part2(){
    let counter = 0

    input.forEach((line) => {
        if(overlap(line.split(',')[0], line.split(',')[1])){
            counter++
        }
    })

    return counter
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