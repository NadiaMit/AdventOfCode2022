import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay).filter((element) => {return element !== ""})


function evaluatePairs(left, right){
    if(typeof left === 'number' && typeof right === 'number'){
        return right - left 
    }

    if(Array.isArray(left) && Array.isArray(right)){
        for(let i = 0; i < left.length && i< right.length; i++){
            const evaluation = evaluatePairs(left[i], right[i])
            if(evaluation !== 0) {
                return evaluation
            }
        }

        return right.length - left.length
    }

    if(Array.isArray(left)){
        return evaluatePairs(left, [right])
    }

    return evaluatePairs([left], right)
}

function part1(){
    let indexSum = 0
    let pairIndex = 1
    
    for(let left = 0; left < input.length; left+=2){
        evaluatePairs(eval(input[left]), eval(input[left+1])) > 0 ? indexSum += pairIndex : indexSum += 0
        pairIndex++
    }

    return indexSum
}

function part2(){
    input.push('[[2]]')
    input.push('[[6]]')
    input.sort((a, b) => {return evaluatePairs(eval(a), eval(b))}).reverse()

    return (input.indexOf('[[2]]')+1) * (input.indexOf('[[6]]')+1)
}

console.log("part 1:", part1())
console.log("part 2:", part2())