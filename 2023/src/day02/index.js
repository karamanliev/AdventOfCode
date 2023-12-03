import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const lines = input.split("\n")

  let possibleGames = []

  for (const line of lines) {
    const { gameId, sets } = getGameIdAndSets(line)
    // console.log("🚀 ~ file: index.js:11 ~ sets:", sets)

    let possibleGame = true
    for (const set of sets) {
      // const red = set.slice()

      const red = getColorCount("red", set)
      const blue = getColorCount("blue", set)
      const green = getColorCount("green", set)

      if (red > 12 || green > 13 || blue > 14) {
        possibleGame = false
      }
    }

    // correct condition
    if (possibleGame) {
      possibleGames.push(Number(gameId))
    }
  }

  const sum = possibleGames.reduce((acc, curr) => acc + curr, 0)

  return sum
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const getGameIdAndSets = (line) => {
  const trimGame = line.replace("Game ", "")
  const gameId = trimGame.substring(0, trimGame.indexOf(":"))
  const sets = trimGame.substring(trimGame.indexOf(":") + 2).split("; ")

  return { gameId, sets }
}

const getColorCount = (color, set) => {
  const regex = new RegExp(`\\b(\\d+)\\s${color}\\b`)
  const match = set.match(regex)

  if (match) {
    return parseInt(match[1], 10)
  }
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
