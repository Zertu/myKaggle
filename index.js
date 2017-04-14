const util = require('./util'),
    Papa = require('babyparse'), {kNN,Bayes} = require('nodeml')

async function main(path) {
    let data = await getData(path)
        const trainData = data[2],
            testData = data[1],
            submission = data[0]
        let bayes = new Bayes()
        trainData
            .data
            .pop()
        let dir = await util.readDir('./')
        if (dir.find(name => name == 'model')) {
            let model = await util.readFile('./model')
            bayes.setModel(JSON.parse(model))
        } else {
            trainData
                .data
                .map((train, el) => {
                    let result = train.Sex
                    delete train.Sex
                    bayes.train(train, result)
                })
            let model = bayes.getModel()
            await util.writeFile('model', JSON.stringify(model))
        }
        testData.data.pop()
        console.log(bayes.test(testData.data[0]))
    }

    async function getData(path) {
        try {
            let res = await(util.readDir(path))
            for (let i = 0; i < res.length; i++) {
                res[i] = Papa.parse(await util.readFile(path + '/' + res[i]), {header: true})
            }
            return res
        } catch (e) {
            console.log(e)
        }
    }
    try
    {
        main('./data')
    } catch (e) {
        console.log(e)
    }