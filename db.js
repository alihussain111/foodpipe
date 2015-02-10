/**
 * Created by ahussain1 on 1/24/2015.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social',function(){
    console.log('mongodb connected')
})
module.exports = mongoose