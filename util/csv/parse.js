const csv = require('csv')
module.exports = function (data) {
    return new Promise((resolve, reject) => {
        csv.parse(data, (err, data) => {
            if(err)reject(err)
            resolve(data)
        })
    })
}