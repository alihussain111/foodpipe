/**
 * Created by ahussain1 on 1/23/2015.
 */
var express = require('express')
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.use('/api/posts',require('./controllers/api/posts'))
app.use(require('./controllers/static'))

//app.get('/api/posts', function (req, res) {
//    res.json([
//            {
//                username:'dickeyxxx',
//                body:'node rocks!'
//            }
//        ]
//
//    )
//
//})

app.listen(3000,function(){
    console.log('server listening on ',3000)
})

//app.post('/api/posts', function (req, res) {
//    console.log('post received!')
//    console.log(req.body.username)
//    console.log(req.body.body)
//    res.send(201)
//})



