const { getStringInput } = require('../utils')

const input = getStringInput()

const stringifiedCaloryArray = input
    .split('\n\n')
    .map((line) => line.split('\n'))

const reducedCaloryArr = stringifiedCaloryArray.map((subArr) =>
    subArr.map((val) => Number(val)).reduce((acc, curr) => acc + curr)
)

const topThreeCaloriesArray = reducedCaloryArr.sort((a, b) => b - a).slice(0, 3)

const topCalory = topThreeCaloriesArray[0]
const topThreeCaloriesSum = topThreeCaloriesArray.reduce(
    (acc, curr) => acc + curr
)

console.log(
    `Top Calory: ${topCalory}\nTop Three Calories: ${topThreeCaloriesSum}`
)
