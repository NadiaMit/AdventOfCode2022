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
    }
}