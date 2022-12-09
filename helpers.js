import FileReader from 'fs'

const path = 'inputs/'

export default {
    /**
     * Read a file and return an array of integers
     * @param {string} file - file name, has to be in the inputs folder
     * @returns an array of integers
     */
    textToIntArray: (file) =>{
        const text = FileReader.readFileSync(path+file, 'utf8')
        const input = []
        text.split('\r\n').forEach(e => {input.push(parseInt(e))})
        return input
    },

    /**
     * Read a file and return an array of strings
     * @param {string} file - file name, has to be in the inputs folder
     * @returns an array of strings
     */
    textToStringArray: (file) =>{
        const text = FileReader.readFileSync(path+file, 'utf8')
        const input = text.split('\r\n')
        return input
    },

    /**
     * Read a file and return a string
     * @param {string} file - file name, has to be in the inputs folder
     * @returns a string
     */
    textToString: (file) =>{
        const text = FileReader.readFileSync(path+file, 'utf8')
        return text
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