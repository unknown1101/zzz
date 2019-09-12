const server = require('express')()
server.listen(process.env.PORT || 5000)
server.get('/hello',function(req,res){
res.end('hello world')

})