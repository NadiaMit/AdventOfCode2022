import Helper from '../helpers.js'

const currentDay = process.argv.slice(1)[0].split('\\').pop().split('.')[0] + ".txt"
const input = Helper.textToString(process.argv.length > 2 ? process.argv[2] : currentDay)

const rockEnemy = 'A'
const rockME = 'X'
const paperEnemy = 'B'
const paperME = 'Y'
const scissorEnemy = 'C'
const scissorME = 'Z'
const loose = 'X'
const draw = 'Y'
const win = 'Z'

function part1(){
    let score = 0;
    let moves = []
    input.forEach(game => {
        moves = game.split(' ')
        switch(moves[1]){
            case rockME: score += 1; break;
            case paperME: score += 2; break;
            case scissorME: score += 3; break;
        }
        
        if(moves[1] === rockME && moves[0] === scissorEnemy || moves[1] === paperME && moves[0] === rockEnemy || moves[1] === scissorME && moves[0] === paperEnemy){
            score += 6
        }
        else if(moves[1] === rockME && moves[0] === rockEnemy || moves[1] === paperME && moves[0] === paperEnemy || moves[1] === scissorME && moves[0] === scissorEnemy){
            score += 3
        }

    });

    return score
}

function part2(){
    let score = 0;
    let moves = []
    input.forEach(game => {
        moves = game.split(' ')
        switch(moves[1]){
            case loose: { 
                switch(moves[0]){
                    case rockEnemy: score += 3; break;
                    case paperEnemy: score += 1; break;
                    case scissorEnemy: score += 2; break;
                }
                score += 0; 
                break;
            }
            case draw: {
                switch(moves[0]){
                    case rockEnemy: score += 1; break;
                    case paperEnemy: score += 2; break;
                    case scissorEnemy: score += 3; break;
                }
                score += 3; break;
            }
            case win: {
                switch(moves[0]){
                    case rockEnemy: score += 2; break;
                    case paperEnemy: score += 3; break;
                    case scissorEnemy: score += 1; break;
                }
                score += 6; break;
            }
        }
    });

    return score
}



console.log("part 1:", part1())
console.log("part 2:", part2())