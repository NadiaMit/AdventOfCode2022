import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToStringArray(process.argv.length > 2 ? process.argv[2] : currentDay)

function part1(){
    let score = 0;
    let enemy = ''
    let me = ''
    input.forEach(game => {
        [enemy, me] = game.split(' ')
        switch(me){
            case 'X': score += 1; break;
            case 'Y': score += 2; break;
            case 'Z': score += 3; break;
        }
        
        if(me === 'X' && enemy === 'C' || me === 'Y' && enemy === 'A' || me === 'Z' && enemy === 'B'){
            score += 6
        }
        else if(me === 'X' && enemy === 'A' || me === 'Y' && enemy === 'B' || me === 'Z' && enemy === 'C'){
            score += 3
        }

    });

    return score
}

function part2(){
    let score = 0;
    let enemy = ''
    let me = ''

    const loose = 'X'
    const draw = 'Y'
    const win = 'Z'

    input.forEach(game => {
        [enemy, me] = game.split(' ')
        switch(me){
            case loose: { 
                switch(enemy){
                    case 'A': score += 3; break;
                    case 'B': score += 1; break;
                    case 'C': score += 2; break;
                }
                score += 0; 
                break;
            }
            case draw: {
                switch(enemy){
                    case 'A': score += 1; break;
                    case 'B': score += 2; break;
                    case 'C': score += 3; break;
                }
                score += 3; break;
            }
            case win: {
                switch(enemy){
                    case 'A': score += 2; break;
                    case 'B': score += 3; break;
                    case 'C': score += 1; break;
                }
                score += 6; break;
            }
        }
    });

    return score
}

console.log("part 1:", part1())
console.log("part 2:", part2())
