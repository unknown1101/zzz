const server = require('express')()
server.listen(3000)
server.get('/hello',function(req,res){
res.end('hello world')

})