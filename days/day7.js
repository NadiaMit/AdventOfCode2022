import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

const fileSystem = {
    parent: null,
    name: '/',
    files: 0,
    directories: []
}

let currentDirectory = fileSystem

function preparation(){
    input.forEach(line => {
        if(line[0] === '$'){
            if(line.split(' ')[1] == 'cd'){
                if(line.split(' ')[2] === '..'){
                    currentDirectory = currentDirectory.parent
                }
                else{
                    currentDirectory.directories.forEach(dir => {
                        if(dir.name === line.split(' ')[2]){
                            currentDirectory = dir
                        }
                    })
                }
            }
        }
        else if(line.split(' ')[1] !== 'ls'){
            if(line.includes('dir')){
                currentDirectory.directories.push({parent: currentDirectory, name: line.split(' ')[1], files: 0, directories:[]})
            }
            else{
                currentDirectory.files += parseInt(line.split(' ')[0])
            }
        }
    })
}

function calculateSize(dir){
    let size = 0;
    
    size+= dir.files

    dir.directories.forEach(d => {
        size += calculateSize(d)
    })
    return size
}

function calculateSumSmaller(dir, upperLimit){
    let sum = 0
    if(calculateSize(dir) <= upperLimit){
        sum += calculateSize(dir)
    }
    
    dir.directories.forEach(dir => {
        sum += calculateSumSmaller(dir, upperLimit)
    })

    return sum
}

const biggerDirs = []
function checkIfBigger(dir, underLimint){
    if(calculateSize(dir) >= underLimint){
        biggerDirs.push(calculateSize(dir))
    }

    dir.directories.forEach(dir => {
        checkIfBigger(dir, underLimint)
    })
}

function part1(){
    return calculateSumSmaller(fileSystem, 100000)
}

function part2(){
    let freeSpace = 70000000 - calculateSize(fileSystem)
    let spaceNeeded = 30000000 - freeSpace

    checkIfBigger(fileSystem, spaceNeeded)

    return Math.min(...biggerDirs)
}

preparation()
console.log("part 1:", part1())
console.log("part 2:", part2())