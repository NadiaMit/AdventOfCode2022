import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

const alphabet = "abcdefghijklmnopqrstuvwxyz"

function preparation(){
    const heightMap = []
    let startPos = [0, 0]
    let endPos = [0, 0]

    for(let y = 0; y < input.length; y++){
        heightMap.push([])
        for(let x = 0; x < input[y].length; x++){
            switch(input[y][x]){
                case 'S':{
                    startPos = [y, x]
                    heightMap[y].push(0)
                    break
                }
                case 'E':{
                    endPos = [y, x]
                    heightMap[y].push(25)
                    break
                }
                default:{
                    heightMap[y].push(alphabet.indexOf(input[y][x]))
                }
            }
        }
    }

    return [heightMap, startPos, endPos]
}

function getValidAdjacent(heightMap, currPos, reversed = false){
    const [y, x] = currPos
    const currHeight = heightMap[y][x]
    const adjacent = []

    if(reversed){
        if(heightMap[y].length>x+1 && currHeight <= heightMap[y][x+1] + 1 ){//right
            adjacent.push([y, x+1])
        }
        if(x-1 >= 0 && currHeight <= heightMap[y][x-1] + 1){//left
            adjacent.push([y, x-1])
        }
        if(heightMap.length>y+1 && currHeight <= heightMap[y+1][x] + 1){//down
            adjacent.push([y+1, x])
        }
        if(y-1 >= 0 && currHeight <= heightMap[y-1][x] + 1){//up
            adjacent.push([y-1, x])
        }
    }
    else{
        if(heightMap[y].length>x+1 && heightMap[y][x+1] <= currHeight + 1){//right
            adjacent.push([y, x+1])
        }
        if(x-1 >= 0 && heightMap[y][x-1] <= currHeight + 1){//left
            adjacent.push([y, x-1])
        }
        if(heightMap.length>y+1 && heightMap[y+1][x] <= currHeight + 1){//down
            adjacent.push([y+1, x])
        }
        if(y-1 >= 0 && heightMap[y-1][x] <= currHeight + 1){//up
            adjacent.push([y-1, x])
        }
    }
    
    return adjacent
}

function breadthFirstSearch(heightMap, startPos, reversed = false){
    const queue = []
    const visited = new Set()
    const steps = new Map()

    queue.push(startPos)
    steps.set(`${startPos[0]},${startPos[1]}`, 0)
    visited.add(`${startPos[0]},${startPos[1]}`)

    while(queue.length > 0){
        const currPos = queue.shift()
        const neighbours = getValidAdjacent(heightMap, currPos, reversed)
        for(const adjacent of neighbours){
            if(!visited.has(`${adjacent[0]},${adjacent[1]}`) || steps.get(`${currPos[0]},${currPos[1]}`)+1 < steps.get(`${adjacent[0]},${adjacent[1]}`)){
                steps.set(`${adjacent[0]},${adjacent[1]}`, steps.get(`${currPos[0]},${currPos[1]}`)+1)
                queue.push(adjacent)
                visited.add(`${adjacent[0]},${adjacent[1]}`)
            }  
        }
    }

    return steps
}

function part1(){
    const [heightMap, startPos, endPos] = preparation()
    return breadthFirstSearch(heightMap, startPos).get(`${endPos[0]},${endPos[1]}`)
}

function part2(){
    const [heightMap, _, endPos] = preparation()
    const steps =  breadthFirstSearch(heightMap, endPos, true)

    for(let y = 0; y < heightMap.length; y++){
        for(let x = 0; x < heightMap[y].length; x++){
            if(heightMap[y][x] !== 0){
                steps.delete(`${y},${x}`)
            }
        }
    }

    return Math.min(...steps.values())
}

console.log("part 1:", part1())
console.log("part 2:", part2())