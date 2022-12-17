import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

function createShape(shapeNum){
    switch(shapeNum){
        case 1:{
            return [[0,0],[0,1],[0,2],[0,3]]
        }
        case 2:{
            return [[0,1],[1,0],[1,1],[1,2],[2,1]]
        }
        case 3:{
            return [[0,0],[0,1],[0,2],[1,2],[2,2]]
        }
        case 4:{
            return [[0,0],[1,0],[2,0],[3,0]]
        }
        case 0:{
            return [[0,0],[0,1],[1,0],[1,1]]
        }
    }
}

function print(set, points){
    const highestY = Math.max(...points.map((x) => x[0])) > Math.max(...([...set].map((x) => JSON.parse(x)[0]))) ? Math.max(...points.map((x) => x[0])) : Math.max(...([...set].map((x) => JSON.parse(x)[0])))
    
    for(let y = highestY; y>0; y--){
        let line = '|'
        for(let x = 0; x<7; x++){
            if(set.has(JSON.stringify([y,x]))){
                line += ' #'
            }
            else if(points.findIndex((point) => point[0] === y && point[1] === x) !== -1){
                line += ' @'
            }
            else{
                line += ' .'
            }
        }
        line += ' |'
        console.log(line)
    }
    console.log('+ - - - - - - - +')
}

function part1(){
    let highestY = 0
    let inputCounter = 0
    const tower = new Set()

    for(let i = 0; i<7;i++){
        tower.add(JSON.stringify([0,i]))
    }

    for(let i = 1; i<=2022; i++){
        const currShape = createShape(i%5)
        
        currShape.forEach(point => {
            point[0] += highestY+4
            point[1] += 2
        })

        let touchedTower = false
        while(!touchedTower){

            let canMove = true
            switch(input[inputCounter%input.length]){
                case '>':{
                    currShape.forEach(point =>{
                        if(point[1] === 6 || tower.has(JSON.stringify([point[0],point[1]+1]))){
                            canMove = false
                        }
                    })
                    if(canMove){
                        currShape.forEach(point =>{
                            point[1]++
                        })
                    }
                    break
                }
                case '<':{
                    currShape.forEach(point =>{
                        if(point[1] === 0 || tower.has(JSON.stringify([point[0],point[1]-1]))){
                            canMove = false
                        }
                    })
                    if(canMove){
                        currShape.forEach(point =>{
                            point[1]--
                        })
                    }
                    break
                }
            }
            inputCounter++

            let canTouch = false
            currShape.forEach(point => {
                if(tower.has(JSON.stringify([point[0]-1,point[1]]))){
                    canTouch = true
                }
            })
            
            if(canTouch){
                currShape.forEach(point => {
                    tower.add(JSON.stringify(point))
                })
                touchedTower = true
                highestY = Math.max(...([...tower].map((x) => JSON.parse(x)[0])))
            }
            else{
                currShape.forEach(point => {
                    point[0]--
                })
            }
        }
    }

    return highestY
}

function part2(){


    return 0
}

console.log("part 1:", part1())
console.log("part 2:", part2())