import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

function part1(){
    const occupied = new Set()

    input.forEach((line)=>{
        let [sensor, beacon] = line.split(':')
        sensor = sensor.trim().replace('Sensor at ', '').trim()
        beacon = beacon.trim().replace('closest beacon is at ', '').trim()

        sensor = sensor.replace('x=','').replace('y=','').trim().split(',').map(Number)
        beacon = beacon.replace('x=','').replace('y=','').trim().split(',').map(Number)

        const euclideanDistance = Math.abs(sensor[0] - beacon[0]) + Math.abs(sensor[1] - beacon[1])

        const y = process.argv.length > 2 ? 10 : 2000000
        const posX = euclideanDistance - Math.abs(sensor[1] - y)
        for(let x = sensor[0]-posX; x <= sensor[0]+posX; x++){
            if(!(x === beacon[0] && y === beacon[1])){
                occupied.add(JSON.stringify([x,y]))
            }
        }
    })

    return occupied.size
}

function part2(){
    const scannerMap = new Map()

    input.forEach((line)=>{
        let [sensor, beacon] = line.split(':')
        sensor = sensor.trim().replace('Sensor at ', '').trim()
        beacon = beacon.trim().replace('closest beacon is at ', '').trim()

        sensor = sensor.replace('x=','').replace('y=','').trim().split(',').map(Number)
        beacon = beacon.replace('x=','').replace('y=','').trim().split(',').map(Number)

        const euclideanDistance = Math.abs(sensor[0] - beacon[0]) + Math.abs(sensor[1] - beacon[1])

        scannerMap.set(JSON.stringify(sensor), euclideanDistance)
    })

    const limit = process.argv.length > 2 ? 20 : 4000000
    let visible = false
    for(let y = 0; y < limit; y++){
        for(let x = 0; x < limit; x++){
            visible = false
            for(const scanner of scannerMap.keys()){
                const sensor = JSON.parse(scanner)
                const euclideanDistance = scannerMap.get(scanner)
                const currentEucledianDistance = Math.abs(sensor[0] - x) + Math.abs(sensor[1] - y)
                if(currentEucledianDistance <= euclideanDistance){
                    x = sensor[0] + (euclideanDistance - Math.abs(sensor[1] - y))
                    visible = true
                    break
                }
            }
            if(!visible){
                return x * 4000000 + y
            }
        }
    }

    return 5
}

console.log("part 1:", part1())
console.log("part 2:", part2())