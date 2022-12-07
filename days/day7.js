import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

const root = {
    parent: null,
    name: '/',
    size: 0,
    directories: []
}

let currentDirectory = root

let splittedLine = []
function preparation(){
    input.forEach(line => {
        splittedLine = line.split(' ')
        switch(splittedLine[0]){
            case '$': {
                if(splittedLine[1] === 'cd'){
                    switch(splittedLine[2]){
                        case '..': {
                            currentDirectory = currentDirectory.parent
                            break
                        }
                        case '/': {
                            currentDirectory = root
                            break
                        }
                        default: {
                            currentDirectory.directories.forEach(dir => {
                                if(dir.name === line.split(' ')[2]){
                                    currentDirectory = dir
                                }
                            })
                            break
                        }
                    }
                }
                break
            }
            case 'dir': {
                currentDirectory.directories.push({parent: currentDirectory, name: splittedLine[1], size: 0, directories:[]})
                break
            }
            default: {
                addFile(currentDirectory, parseInt(splittedLine[0]))
            }
        }
    })
}

function addFile(dir, size){
    dir.size += size
    if(dir.parent !== null){
        addFile(dir.parent, size)
    }
}

function calculateSumSmaller(dir, upperLimit){
    let sum = 0
    if(dir.size <= upperLimit){
        sum += dir.size
    }
    
    dir.directories.forEach(dir => {
        sum += calculateSumSmaller(dir, upperLimit)
    })

    return sum
}

const biggerDirs = []
function checkIfBigger(dir, underLimint){
    if(dir.size >= underLimint){
        biggerDirs.push(dir.size)
    }

    dir.directories.forEach(dir => {
        checkIfBigger(dir, underLimint)
    })
}

function part1(){
    return calculateSumSmaller(root, 100000)
}

function part2(){
    let spaceNeeded = 30000000 - (70000000 - root.size)

    checkIfBigger(root, spaceNeeded)

    return Math.min(...biggerDirs)
}

preparation()
console.log("part 1:", part1())
console.log("part 2:", part2())