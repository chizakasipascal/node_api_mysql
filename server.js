//Import 

var express =require('express');

//instatiation du serveur
var server=express();

//routes
server.get('/',function (req,res)  {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour node</h1>');
}); 

//launcher seveur 

server.listen(8080,function(){
    console.log('Sever all ready :)');
});