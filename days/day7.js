import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

class Directory{
    parent = null;
    name = '';
    files = [];
    directories = [];

    constructor(parent, name, files, directories){
        this.parent = parent;
        this.name = name;
        this.files = files;
        this.directories = directories;
    }

    calculateSize(){
        let size = 0;
        
        this.files.forEach(file => {
            size += file.size
        })

        this.directories.forEach(dir => {
            size += dir.calculateSize()
        })
        return size
    }
}

class File{
    name = '';
    size = 0;

    constructor(name, size){
        this.name = name;
        this.size = parseInt(size);
    }
}

const fileSystem = new Directory(null,'/', [], [])
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
                currentDirectory.directories.push(new Directory(currentDirectory, line.split(' ')[1], [], []))
            }
            else{
                currentDirectory.files.push(new File(line.split(' ')[1], line.split(' ')[0]))
            }
        }
    })
}

function calculateSumSmaller(dir, upperLimit){
    let sum = 0
    if(dir.calculateSize() <= upperLimit){
        sum += dir.calculateSize()
    }
    
    dir.directories.forEach(dir => {
        sum += calculateSumSmaller(dir, upperLimit)
    })

    return sum
}

const biggerDirs = []
function checkIfBigger(dir, underLimint){
    if(dir.calculateSize() >= underLimint){
        biggerDirs.push(dir.calculateSize())
    }

    dir.directories.forEach(dir => {
        checkIfBigger(dir, underLimint)
    })
}


function part1(){
    return calculateSumSmaller(fileSystem, 100000)
}

function part2(){
    let freeSpace = 70000000 - fileSystem.calculateSize()
    let spaceNeeded = 30000000 - freeSpace

    checkIfBigger(fileSystem, spaceNeeded)

    return Math.min(...biggerDirs)
}

preparation()
console.log("part 1:", part1())
console.log("part 2:", part2())