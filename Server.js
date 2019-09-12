const server = require('express')()
server.listen(5000)
server.get('/hello',function(req,res){
res.end('hello world')

})