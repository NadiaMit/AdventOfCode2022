import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

function preparation() {
    const elves = []
    let currentElf = 0

    elves.push(0)

    for (let i = 0; i < input.length; i++) {
        if (input[i] != '') {
            elves[currentElf] += parseInt(input[i])
        }
        else {
            currentElf++
            elves.push(0)
        }
    }

    return elves
}

function part1() {
    const elves = preparation()

    return Math.max(...elves)
}

function part2() {
    const elves = preparation()

    let topThree = elves.sort((a, b) => a < b ? 1 : a > b ? -1 : 0).slice(0, 3)

    return topThree.reduce((a, b) => a + b, 0)

}

//check performance
console.time('time part 1')
const result1 = part1()
console.timeEnd('time part 1')
console.time('time part 2')
const result2 = part2()
console.timeEnd('time part 2')

console.log("part 1:", result1)
console.log("part 2:", result2)