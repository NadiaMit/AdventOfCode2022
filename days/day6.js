import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)


function findFirstMarker(string, size){
    for(let i = 0; i < string.length; i++){
        if(new Set(string.substring(i, i+size)).size === size){
            return i+size
        }
    }
    return 0
}

console.log("part 1:", findFirstMarker(input, 4))
console.log("part 2:", findFirstMarker(input, 14))