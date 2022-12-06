import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

let result1 = 0
let result2 = 0
const groupOfFour = []
const groupOf14 = []

function allDifferent(array){
    for(let i = 0; i < array.length; i++){
        if(array.includes(array[i], i+1)){
            return false
        }
    }
    return true
}

for(let i = 0; i < input.length; i++){
    if(!result1){
        groupOfFour.push(input[i])
        if(groupOfFour.length === 4){
            if(allDifferent(groupOfFour)){
                result1 = i+1
            }
            else{
                groupOfFour.shift()
            }
        }
    }
    if(!result2){
        groupOf14.push(input[i])
        if(groupOf14.length === 14){
            if(allDifferent(groupOf14)){
                result2 =  i+1
            }
            else{
                groupOf14.shift()
            }
        }
    }
}

console.log("part 1:", result1)
console.log("part 2:", result2)