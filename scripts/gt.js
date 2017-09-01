/**
 * Created by wangxupeng on 2017/9/1.
 */

// using `babel-register`
if (!global._babelPolyfill) {
    require('babel-polyfill');
}
require('babel-register');
module.exports = require('./gt/index');
