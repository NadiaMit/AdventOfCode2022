import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

const caveSize = {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
}

function preparation(){
    const rockSet = new Set()

    for(const line of input){
        const rockPositions = line.split(' -> ')
        for(let i = 0; i<rockPositions.length-1; i++){
            const [rockX, rockY] = rockPositions[i].split(',').map(Number)
            const [nextX, nextY] = rockPositions[i+1].split(',').map(Number)

            const startX = Math.min(rockX, nextX)
            const endX = Math.max(rockX, nextX)
            const startY = Math.min(rockY, nextY)
            const endY = Math.max(rockY, nextY)

            for(let y = startY; y <= endY; y++){
                for(let x = startX; x <= endX; x++){
                    rockSet.add(JSON.stringify([x, y]))
                }
            }
        }
    }

    caveSize.minX = Math.min(...([...rockSet].map(rock => JSON.parse(rock)[0])))
    caveSize.maxX = Math.max(...([...rockSet].map(rock => JSON.parse(rock)[0])))
    caveSize.maxY = Math.max(...([...rockSet].map(rock => JSON.parse(rock)[1])))

    return rockSet
}

function printCave(rockSet, sandSet){
    let caveString = caveSize.minX.toString() + ' - ' + caveSize.maxX.toString()
    console.log(caveString)

    for(let y = caveSize.minY; y <= caveSize.maxY; y++){
        caveString = ''
        for(let x = caveSize.minX; x <= caveSize.maxX; x++){
            if(rockSet.has(JSON.stringify([x, y])))
                caveString += '\u2588\u2588'
            else if(sandSet.has(JSON.stringify([x, y])))
                caveString += 'oo'
            else
                caveString += '  '
            
        }
        caveString += ' ' + y.toString()
        console.log(caveString)
    }
}

function part1(){
    const rockSet = preparation()
    let sandInside = true
    const sandSet = new Set()
    const sandStart = [500,0]
    let sandX, sandY

    while(sandInside){
        sandX = sandStart[0]
        sandY = sandStart[1]

        for(; sandY <= caveSize.maxY; sandY++){
            if(rockSet.has(JSON.stringify([sandX, sandY+1])) || sandSet.has(JSON.stringify([sandX, sandY+1]))){
                if(!(rockSet.has(JSON.stringify([sandX-1, sandY+1])) || sandSet.has(JSON.stringify([sandX-1, sandY+1])))){
                    sandX--

                }
                else if(!(rockSet.has(JSON.stringify([sandX+1, sandY+1])) || sandSet.has(JSON.stringify([sandX+1, sandY+1])))){
                    sandX++
                }
                else{
                    break
                }
            }
        }
        
        if(sandY < caveSize.maxY){
            sandSet.add(JSON.stringify([sandX, sandY]))
        }
        else{
            sandInside = false
        }
    }

    printCave(rockSet, sandSet)
    return sandSet.size
}

function part2(){
    const rockSet = preparation()
    let sandNotStart = true
    const sandSet = new Set()
    const sandStart = [500,0]
    let sandX, sandY

    for(let x = caveSize.minX; x <= caveSize.maxX; x++){
        rockSet.add(JSON.stringify([x, caveSize.maxY+2]))
    }

    while(sandNotStart){
        sandX = sandStart[0]
        sandY = sandStart[1]

        for(; sandY <= caveSize.maxY; sandY++){
            if(rockSet.has(JSON.stringify([sandX, sandY+1])) || sandSet.has(JSON.stringify([sandX, sandY+1]))){
                if(!(rockSet.has(JSON.stringify([sandX-1, sandY+1])) || sandSet.has(JSON.stringify([sandX-1, sandY+1])))){
                    sandX--

                }
                else if(!(rockSet.has(JSON.stringify([sandX+1, sandY+1])) || sandSet.has(JSON.stringify([sandX+1, sandY+1])))){
                    sandX++
                }
                else{
                    break
                }
            }
        }

        if(sandX === sandStart[0] && sandY === sandStart[1]){
            sandNotStart = false
        }
        sandSet.add(JSON.stringify([sandX, sandY]))
    }

    printCave(rockSet, sandSet)
    return sandSet.size
}

console.log("part 1:", part1())
console.log("part 2:", part2())