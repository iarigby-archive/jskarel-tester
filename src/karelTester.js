const Mocha = require('mocha')

module.exports.testFile = async function (testFile) {
    const mocha = new Mocha({})
    mocha.addFile(testFile)
    const results = []
    return new Promise((resolve, reject) => {
        mocha
            // .reporter('min')
            .run()
            .on('pass', test => results.push(test))
            .on('fail', test => results.push(test))
            .on('end', () => resolve(results.map(t => {
                // console.log(t)
                return {
                    title: t.title,
                    timedOut: t.timedOut,
                    state: t.state,
                    err: t.err
                }
            })))
    })

}