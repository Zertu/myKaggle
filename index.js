const util = require('./util')
,Papa=require('babyparse')
async function main(path) {
    try {
        let res = await(util.readDir(path))
        for (let i = 0; i < res.length; i++) {
           res[i] =Papa.parse(await util.readFile(path + '/' + res[i]),{header: true})
        }
        console.log(res[0])
    } catch (e) {
        console.log(e)
    }
}
main('./data')