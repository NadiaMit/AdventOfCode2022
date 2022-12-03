import FileReader from 'fs'

const path = 'inputs/'

export default {
    textToInt: (file) =>{
        const text = FileReader.readFileSync(path+file, 'utf8')
        const input = []
        text.split('\r\n').forEach(e => {input.push(parseInt(e))})
        return input
    },

    textToString: (file) =>{
        const text = FileReader.readFileSync(path+file, 'utf8')
        const input = text.split('\r\n')
        return input
    },

    checkSameLetter: (first, second, third = '') =>{
        let letter = ''

        for(const char of first){
            if(second.search(char) !== -1){
                if(third === '' || third.search(char) !== -1){
                    letter = char
                    break
                }
            }
        }

        return letter
    }
}