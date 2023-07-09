const fs = require('fs')

function getInput() {
    return new Promise((resolve, reject) => {
        fs.readFile('./input.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

function getChunksSize(data) {
    const chunksSize = data.reduce((acc, curr, index) => {
        if (curr === '') {
            acc.push(index)
        }

        return acc
    }, [])

    return chunksSize
}

function getChunks(data) {
    const chunksSize = getChunksSize(data)

    const chunks = chunksSize.map((chunkSize, index) => {
        const lastChunkSize = chunksSize[index - 1] + 1
        const start = index === 0 ? 0 : lastChunkSize

        return data.slice(start, chunkSize)
    })

    return chunks
}

function getCalculatedCalories(data) {
    const chunks = getChunks(data)

    const caloriesArray = chunks.map((chunk) => {
        return chunk
            .map((calory) => parseInt(calory))
            .reduce((acc, curr) => {
                return acc + curr
            })
    })

    return {
        topCalory: Math.max(...caloriesArray),
        topThreeCalories: caloriesArray
            .sort((a, b) => b - a)
            .slice(0, 3)
            .reduce((acc, curr) => {
                return acc + curr
            }),
    }
}

getInput().then((res) => {
    const resStringArray = res.toString().split('\n')

    const topCalory = getCalculatedCalories(resStringArray).topCalory
    const topThreeCalories = getCalculatedCalories(resStringArray).topThreeCalories

    console.log(
        `Top Calory: ${topCalory}\nTop Three Calory: ${topThreeCalories}`
    )
})
