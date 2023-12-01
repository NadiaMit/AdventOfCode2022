![](https://img.shields.io/badge/stars%20⭐-33-yellow)
![](https://img.shields.io/badge/days%20completed%20📅-18-blue)

# Advent of Code 2022 in JavaScript [![JavaScript](https://skillicons.dev/icons?i=js)](https://skillicons.dev)

This is my try on the Advent of code of 2022 challanges with JavaScript, sadly i only did 18 days (some only part 1), but I managed to get a total of 33 stars in the end and I learned a lot about JavaScript.

## Structure

- `days`: the code for each day will be in the days folder as a `.js` file. My template is also there, so that I can start each day with the same structure.
- `inputs`: all my input data for each day is saved the inputs folder as a `.txt` file. I also have a `test.txt` file, that I use for the example input of each days puzzle.
- `helpers.js`: I created some helpers to read the input data an I am pretty sure, i will add some other helping functions if I see that puzzles will need some generic functionality more than once.

## Run Days

I use `node.js` to run my code. So to run a specific day, you need to use the following command:

```sh
node .\days\dayX.js //exchange X with the days number
```

Each `dayX.js` file, automatically reads the input for the certain day (`dayX.txt`). If you want the day to use a specific `.txt` file, you have to write the name of the file as an argument when running the day in the command line.
The command then will look like this:

```sh
node .\days\dayX.js test.txt //exchange X with the days number, exchange test.txt with your filename
```
