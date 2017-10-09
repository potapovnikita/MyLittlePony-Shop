import defaultOptions from './defaultOptions'

class Database {
    getPonies() {
        const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

        return Array.apply(null, { length: defaultOptions.numberOfPonies }).map((item, index) => {
            const id = index
            let location = defaultOptions.ponyLocation[getRandomValue(0, 3)]
            const isNew = !!getRandomValue(0, 1)
            const price = getRandomValue(500, 5000)
            const color = defaultOptions.colors[getRandomValue(0, 6)]
            const kind = defaultOptions.ponyKinds[getRandomValue(0, 3)]

            if (kind === 'Земная пони') {
                location = location.substring(0, location.length - 2) + 'ая'
            }
            return {
                id,
                name: `${location} ${kind}`,
                isNew,
                price,
                color,
                kind,
            }
        })



    }
}

export default Database