import run from 'aocrunner'

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const inputLines = input.split('\n')

  const onlyNumbersArr = inputLines.map((line) =>
    line
      .split('')
      .filter((char) => !isNaN(char))
      .join(''),
  )

  const firstAndLastNumberArr = onlyNumbersArr.map((number) => {
    if (!number.length) {
      return '0'
    }

    if (number.length === 1) {
      return number + number
    }

    const firstAndLast = number[0] + number[number.length - 1]

    return firstAndLast
  })

  const sum = firstAndLastNumberArr.reduce(
    (acc, curr) => acc + parseInt(curr),
    0,
  )

  return sum
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  const inputLines = input.split('\n')
  const namedNumbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]

  const onlyNumbersArr = inputLines.map((line) => {
    // convert named numbers to values
    // console.log(line)
    let indexes = []

    namedNumbers.forEach((number, index) => {
      const numberValue = (index + 1).toString()

      for (let i = 0; i < line.length; i++) {
        const idx = line.indexOf(number, i)
        idx !== -1 && indexes.push({ idx, numberValue })
      }
    })

    indexes.sort((a, b) => a.idx - b.idx)

    // console.log(indexes.map((obj) => obj.value).join(""))
    let numArr = []
    const lineArr = line.split('')
    lineArr.forEach((char, index) => {
      const found = indexes.find((obj) => obj.idx === index)

      if (!isNaN(char)) {
        numArr.push(char)
      } else {
        if (found) {
          numArr.push(found.numberValue)
        }
      }
    })

    // console.log(numArr)

    return numArr.filter((char) => !isNaN(char)).join('')
  })

  // console.log("🚀 ~ file: index.js:68 ~ onlyNumbersArr:", onlyNumbersArr)

  const firstAndLastNumberArr = onlyNumbersArr.map((number) => {
    if (!number.length) {
      return '0'
    }

    if (number.length === 1) {
      return number + number
    }

    const firstAndLast = number[0] + number[number.length - 1]

    return firstAndLast
  })

  const sum = firstAndLastNumberArr.reduce(
    (acc, curr) => acc + parseInt(curr),
    0,
  )

  return sum
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
