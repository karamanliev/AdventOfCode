const fs = require('fs')

function getInput() {
    return new Promise((resolve, reject) => {
        fs.readFile('./input.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    })
}

getInput().then((input) => {
    const stringifiedCaloryArray = input
        .split('\n\n')
        .map((line) => line.split('\n'))

    const reducedCaloryArr = stringifiedCaloryArray.map((subArr) =>
        subArr.map((val) => Number(val)).reduce((acc, curr) => acc + curr)
    )

    const topThreeCaloriesArray = reducedCaloryArr
        .sort((a, b) => b - a)
        .slice(0, 3)

    const topCalory = topThreeCaloriesArray[0]
    const topThreeCaloriesSum = topThreeCaloriesArray.reduce(
        (acc, curr) => acc + curr
    )

    console.log(
        `Top Calory: ${topCalory}\nTop Three Calories: ${topThreeCaloriesSum}`
    )
})
