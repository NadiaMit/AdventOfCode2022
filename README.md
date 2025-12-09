![](https://img.shields.io/badge/stars%20⭐-33-yellow)
![](https://img.shields.io/badge/days%20completed%20📅-15-blue)
![](https://img.shields.io/badge/days_half_completed_🌗-3-white)

# Advent of Code 2022 in JavaScript [![JavaScript](https://skillicons.dev/icons?i=js)](https://skillicons.dev)

This is my try on the Advent of code of 2022 challanges with JavaScript!

I managed to complete 18 days (some only part 1) and got a total of 33 stars.

## My Progress 33/50⭐

- Day 1 - [Calorie Counting](https://adventofcode.com/2022/day/1): ⭐⭐
- Day 2 - [Rock Paper Scissors](https://adventofcode.com/2022/day/2): ⭐⭐
- Day 3 - [Rucksack Reorganization](https://adventofcode.com/2022/day/3): ⭐⭐
- Day 4 - [Camp Cleanup](https://adventofcode.com/2022/day/4): ⭐⭐
- Day 5 - [Supply Stacks](https://adventofcode.com/2022/day/5): ⭐⭐
- Day 6 - [Tuning Trouble](https://adventofcode.com/2022/day/6): ⭐⭐
- Day 7 - [No Space Left On Device](https://adventofcode.com/2022/day/7): ⭐⭐
- Day 8 - [Treetop Tree House](https://adventofcode.com/2022/day/8): ⭐⭐
- Day 9 - [Rope Bridge](https://adventofcode.com/2022/day/9): ⭐⭐
- Day 10 - [Cathode-Ray Tube](https://adventofcode.com/2022/day/10): ⭐⭐
- Day 11 - [Monkey in the Middle](https://adventofcode.com/2022/day/11): ⭐⭐
- Day 12 - [Hill Climbing Algorithm](https://adventofcode.com/2022/day/12): ⭐⭐
- Day 13 - [Distress Signal](https://adventofcode.com/2022/day/13): ⭐⭐
- Day 14 - [Regolith Reservoir](https://adventofcode.com/2022/day/14): ⭐⭐
- Day 15 - [Beacon Exclusion Zone](https://adventofcode.com/2022/day/15): ⭐⭐
- ...
- Day 17 - [Pyroclastic Flow](https://adventofcode.com/2022/day/17): ⭐
- Day 18 - [Boiling Boulders](https://adventofcode.com/2022/day/18): ⭐
- ...
- Day 21 - [Monkey Math](https://adventofcode.com/2022/day/21): ⭐
- ...

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
