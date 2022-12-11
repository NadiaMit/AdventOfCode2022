import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

function part1(){
    let registerX = 1
    let result = 0
    const cycles = []

    for(const line of input){
        cycles.push(0)

        if(line !== "noop"){
            cycles.push(parseInt(line.split(" ")[1]))
        }
    }


    for(let cycle = 1; cycles.length>0; cycle++){
        if((cycle-20)%40 === 0){
            result += registerX*cycle
        }

        registerX += cycles.shift()
    }
    
    return result
}

function printPixels(pixels){
    for(let y = 0; y < pixels.length; y++){
        let line = ""
        for(let x = 0; x < pixels[y].length; x++){
            line += pixels[y][x] ? "\u2588" : " "
        }
        console.log(line)
    }
}

function part2(){
    let registerX = 1
    const pixels = Array.from({length:6}, _ => {return Array.from({length:40}, _ => {return false})})
    const cycles = []

    for(const line of input){
        cycles.push(0)

        if(line !== "noop"){
            cycles.push(parseInt(line.split(" ")[1]))
        }
    }

    for(let ctrPos = 0; cycles.length>0; ctrPos++){
        if(Math.abs(ctrPos%40-registerX) <=1){
            pixels[parseInt(ctrPos/40)][parseInt(ctrPos%40)] = true
        }

        registerX += cycles.shift()
    }
    
    printPixels(pixels)
}



console.log("part 1:", part1())
console.log("part 2:")
part2()