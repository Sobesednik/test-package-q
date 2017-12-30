const assert = require('assert')
const context = require('../context/')
const testPackageQ = require('../../src/')

const testPackageQTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackageQ, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackageQ()
        })
    },
}

module.exports = testPackageQTestSuite
