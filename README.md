![](https://img.shields.io/badge/day%20📅-2-red)
![](https://img.shields.io/badge/stars%20⭐-4-yellow)
![](https://img.shields.io/badge/days%20completed-2-blue)

# AdventOfCode2022
I'm going to try to at least get some points in the Advent of code of 2022.
Since i need to learn JavaScript and TypeScript anyways, i had the wonderful idea of doing it with JavaScript (trying not to die).

## Structure
- `days`: the code for each day will be in the days folder as a `.js` file. My template is also there, so that I can start each day with the same structure.
- `inputs`: all my input data for each day is saved the inputs folder as a `.txt` file. I also have a `test.txt` file, that I use for the example input of each days puzzle.
- `helpers.js`: I created some helpers to read the input data an I am pretty sure, i will add some other helping functions if I see that puzzles will need some generic functionality more than once.

## Run Days

I use `node.js` to run my code. So to run a specific day, you need to use the following command:
```sh
node .\days\dayX.js //exchange X with the days number
```

Each `dayX.js`file, automatically reads the input for the certain day (`dayX.txt`). If you want the day to use a specific `.txt` file, you have to write the name of the file as an argument when running the day in the command line.
The command then will look like this:

```sh
node .\days\dayX.js test.txt //exchange X with the days number, exchange test.txt with your filename
```
