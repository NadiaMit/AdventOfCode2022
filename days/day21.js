import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

function getMonkeyNumber(monkeyLine){
    
    if(!isNaN(monkeyLine)){
        return Number(monkeyLine)
    }

    for(const line of input){
        if(line.includes(monkeyLine+':')){
            const splittedLine = line.split(':')[1].trim().split(' ')

            if(splittedLine.length === 1){
                return getMonkeyNumber(splittedLine[0])
            }

            const [first, operation, second] = [splittedLine[0], splittedLine[1], splittedLine[2]]
            return eval(getMonkeyNumber(first).toString() + operation + getMonkeyNumber(second).toString())
        }
    }
}


function part1(){
    return getMonkeyNumber('root')
}

function part2(){

    return 0
}

console.log("part 1:", part1())
console.log("part 2:", part2())