import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const inputLines = input.split("\n")

  const onlyNumbersArr = inputLines.map((line) =>
    line
      .split("")
      .filter((char) => !isNaN(char))
      .join(""),
  )

  const firstAndLastNumberArr = onlyNumbersArr.map((number) => {
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
  const inputLines = input.split("\n")
  const namedNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]

  const onlyNumbersArr = inputLines.map((line) => {
    // convert named numbers to values
    // namedNumbers.forEach((number, index) => {
    //   const value = (index + 1).toString()
    //   line = line.replaceAll(number, value)

    //   console.log(line)
    // })
    console.log(line.split("eight").join("8"))

    const onlyNumbers = line
      .split("")
      .filter((char) => !isNaN(char))
      .join("")

    return onlyNumbers
  })

  const firstAndLastNumberArr = onlyNumbersArr.map((number) => {
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

  return
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
