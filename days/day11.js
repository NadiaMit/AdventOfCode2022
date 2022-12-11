import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

function getMonkeys(){
    const monkeys = []

    for(const line of input){
        if(line.includes('Monkey')){
            monkeys.push({items: [], operation: null, test: 0, true: 0, false: 0, inspections: 0})
        }

        else{
            switch(line.trim().split(': ')[0]){
                case 'Starting items':{
                    monkeys[monkeys.length-1].items = line.trim().replace('Starting items: ', '').split(' ').map(x=>parseInt(x))
                    break
                }
                case 'Operation':{
                    monkeys[monkeys.length-1].operation = (old) => {return eval(line.trim().replace('Operation: new = ',''))}
                    break
                }
                case 'Test':{
                    monkeys[monkeys.length-1].test = parseInt(line.trim().replace('Test: divisible by ',''))
                    break
                }
                case 'If true':{
                    monkeys[monkeys.length-1].true = parseInt(line.trim().replace('If true: throw to monkey ',''))
                    break
                }
                case 'If false':{
                    monkeys[monkeys.length-1].false = parseInt(line.trim().replace('If false: throw to monkey ',''))
                    break
                }
            }
        }
    }

    return monkeys
}

function makeMonkeysThrow(rounds, divideWorry= false){
    const monkeys = getMonkeys()

    for(let round = 1; round <=rounds; round++){
        for(const monkey of monkeys){
            for(;monkey.items.length > 0;){
                let currItem = monkey.items.shift()
                currItem = monkey.operation(currItem)
                monkey.inspections++
                if(!divideWorry){
                    currItem = Math.floor(currItem / 3)
                }
                currItem % monkey.test === 0 ? monkeys[monkey.true].items.push(currItem) : monkeys[monkey.false].items.push(currItem)
                
            }
        }
    }

    let topTwo = monkeys.sort((a, b) => a.inspections < b.inspections ? 1 : a.inspections > b.inspections ? -1 : 0)
    return topTwo[0].inspections*topTwo[1].inspections
}

console.log("part 1:", makeMonkeysThrow(20))
//console.log("part 2:", makeMonkeysThrow(10000, true))