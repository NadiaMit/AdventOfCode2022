import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

const stacks = []
const moves = []

function preparation(){
    const stackLines = []
    let tempLine=[]
    let isMoves = false
    let numberStacks = 0

    input.forEach(line => {
        if(isMoves){
            tempLine = line.replace('move','').replace('from ','').replace('to ','').split(' ')
            moves.push([parseInt(tempLine[1]),parseInt(tempLine[2]-1),parseInt(tempLine[3]-1)])
        }
        else if(line === ''){
            isMoves = true
        }

        else{
            if(!line.includes(' 1')){
                stackLines.push(line)
            }
            else{
                numberStacks = parseInt(line.trim().split(' ').slice(-1)[0]) 
            }
            
        }
    })

    for(let i=0;i<numberStacks;i++){
        stacks.push([])
    }

    for(let line = stackLines.length-1; line >= 0; line--){
        for(let n_stack=1;n_stack<stackLines[line].length;n_stack+=4){
            if(stackLines[line][n_stack] !== ' '){
                stacks[(n_stack-1)/4].push(stackLines[line][n_stack])
            }
        }
    }
    

    //console.log(moves)
    //console.log(stacks)
    //console.log(stackLines)
    //console.log(numberStacks)
    return stacks
}

function part1(){
    let returnString = ''
    const stacksPart1 = JSON.parse(JSON.stringify(stacks))

    for(const move of moves){
        for(let i = move[0]; i>0;i--){
            stacksPart1[move[2]].push(stacksPart1[move[1]].pop())
        }
    }

    for(const stack of stacksPart1){
        returnString += stack.pop()
    }

    return returnString
}

function part2(){
    let returnString = ''
    const stacksPart2 = JSON.parse(JSON.stringify(stacks))
    const tempStacks = []

    for(const move of moves){
        for(let i = move[0]; i>0;i--){
            tempStacks.push(stacksPart2[move[1]].pop())
        }
        for(let i = move[0]; i>0;i--){
            stacksPart2[move[2]].push(tempStacks.pop())
        }
    }

    for(const stack of stacksPart2){
        returnString += stack.pop()
    }

    return returnString
}

preparation()
console.log("part 1:", part1())
//console.log(stacks)
console.log("part 2:", part2())