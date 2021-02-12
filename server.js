//Import 
var express =require('express');
var bodyParser=require('body-parser');
//instatiation du serveur
var server=express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


//routes
server.get('/',function (req,res)  {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour node</h1>');
}); 

//launcher seveur 

server.listen(8080,function(){
    console.log('Sever all ready :))');
});