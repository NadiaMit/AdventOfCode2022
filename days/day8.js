import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

function checkIfVisible(x,y){
    let currTree = parseInt(input[y][x])
    let notVisibleDirections = 0

    for(let i = 1; i <= y; i++){//up
        if(currTree - parseInt(input[y-i][x]) <=0){
            notVisibleDirections++
            break
        }
    }
    for(let i = 1; i < input.length-y; i++){//down
        if(currTree - parseInt(input[y+i][x]) <=0){
            notVisibleDirections++
            break
        }   
    }
    for(let i = 1; i <= x; i++){//left
        if(currTree - parseInt(input[y][x-i]) <=0){
            notVisibleDirections++
            break
        }
    }
    for(let i = 1; i < input[y].length-x; i++){//right
        if(currTree - parseInt(input[y][x+i]) <=0){
            notVisibleDirections++
            break
        }
    }

    return notVisibleDirections < 4
}

function checkViewingDistance(x,y){
    let currTree = parseInt(input[y][x])
    let distance = 0
    let currViewingDistance = 0

    for(let i = 1; i <= y; i++){//up
        currViewingDistance++
        if(currTree - parseInt(input[y-i][x]) <=0){
            break
        }
    }
    
    distance=currViewingDistance
    currViewingDistance = 0

    for(let i = 1; i < input.length-y; i++){//down
        currViewingDistance++
        if(currTree - parseInt(input[y+i][x]) <=0){
            break
        }   
    }

    distance*=currViewingDistance
    currViewingDistance = 0

    for(let i = 1; i <= x; i++){//left
        currViewingDistance++
        if(currTree - parseInt(input[y][x-i]) <=0){
            break
        }
    }

    distance*=currViewingDistance
    currViewingDistance = 0

    for(let i = 1; i < input[y].length-x; i++){//right
        currViewingDistance++
        if(currTree - parseInt(input[y][x+i]) <=0){
            break
        }
    }

    distance*=currViewingDistance

    return distance
}

function part1(){
    let visibleOutside = 2*(input.length-1) + 2*(input[0].length-1)
    for(let y = 1; y < input.length-1; y++){
        for(let x = 1; x < input[y].length-1; x++){
            if(checkIfVisible(x,y)){
                visibleOutside++
            }
        }
    }

    return visibleOutside
}

function part2(){
    let maxViewingDistance = 0
    let currentDistance = 0

    for(let y = 0; y < input.length; y++){
        for(let x = 0; x < input[y].length; x++){
            currentDistance = checkViewingDistance(x,y)
            if(currentDistance > maxViewingDistance){
                maxViewingDistance = currentDistance
            }
        }
    }

    return maxViewingDistance
}

console.log("part 1:", part1())
console.log("part 2:", part2())