import Helper from '../helpers.js'

function preparation(input) {
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

function part1(input) {
    const elves = preparation(input)

    return Math.max(...elves)
}

function part2(input) {
    const elves = preparation(input)

    let topThree = elves.sort((a, b) => a < b ? 1 : a > b ? -1 : 0).slice(0, 3)

    return topThree.reduce((a, b) => a + b, 0)

}

const currentDayInput = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"

console.log("part 1:", part1(Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDayInput)))
console.log("part 2:", part2(Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDayInput)))