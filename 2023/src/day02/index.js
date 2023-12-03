import run from 'aocrunner'

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const games = input.split('\n')

  let possibleGames = []

  for (const game of games) {
    const { gameId, sets } = getGameIdAndSets(game)

    let possibleGame = true
    for (const set of sets) {
      const red = getColorCount('red', set)
      const blue = getColorCount('blue', set)
      const green = getColorCount('green', set)

      if (red > 12 || green > 13 || blue > 14) {
        possibleGame = false
      }
    }

    if (possibleGame) {
      possibleGames.push(Number(gameId))
    }
  }

  const sum = possibleGames.reduce((acc, curr) => acc + curr, 0)

  return sum
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  const games = input.split('\n')

  let powerPerGame = []

  for (const game of games) {
    const maxRed = getColorCount('red', game, { max: true })
    const maxGreen = getColorCount('green', game, { max: true })
    const maxBlue = getColorCount('blue', game, { max: true })

    powerPerGame.push(maxRed * maxGreen * maxBlue)
  }

  const sum = powerPerGame.reduce((acc, curr) => acc + curr, 0)

  return sum
}

const getGameIdAndSets = (line) => {
  const trimGame = line.replace('Game ', '')
  const gameId = trimGame.substring(0, trimGame.indexOf(':'))
  const sets = trimGame.substring(trimGame.indexOf(':') + 2).split('; ')

  return { gameId, sets }
}

const getColorCount = (color, str, max) => {
  const regex = new RegExp(`\\b(\\d+)\\s${color}\\b`, max && 'g')
  const match = max ? [...str.matchAll(regex)] : str.match(regex)

  if (max) {
    const matches = match
    const maxColor = matches
      .map((match) => parseInt(match[1], 10))
      .sort((a, b) => b - a)[0]

    return maxColor
  }

  return match && parseInt(match[1], 10)
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
