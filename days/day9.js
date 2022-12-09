import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

const directions = {
    'U': [0,1],
    'D': [0,-1],
    'L': [-1,0],
    'R': [1,0]
}

function moveTail(head, tail){
    let diffX = head[0] - tail[0]
    let diffY = head[1] - tail[1]

    if(Math.abs(diffX) <= 1 && Math.abs(diffY) <= 1){
        return
    }
    
    if(diffX!==0){
        tail[0] += diffX / Math.abs(diffX)
    }
    if(diffY!==0){
        tail[1] += diffY / Math.abs(diffY)
    }
}

function moveHead(direction, distance, knots, visited){
    const move = directions[direction]
    distance = parseInt(distance)
    
    for(let i = 0; i < distance; i++){
        knots[0][0] += move[0]
        knots[0][1] += move[1]
        
        for(let j = 1; j < knots.length; j++){
            moveTail(knots[j-1], knots[j])
        }

        visited.add(`${knots[knots.length-1][0]},${knots[knots.length-1][1]}`)
    }

}

function calculateVisited(tailLength){
    const visited = new Set([`0,0`])
    const knots = Array.from({length:tailLength}, _ => {return [0,0]})

    for(const line of input){
        const [direction, distance] = line.split(" ")
        moveHead(direction, distance, knots, visited)
    }

    return visited.size
}

console.log("part 1:", calculateVisited(2))
console.log("part 2:", calculateVisited(10))