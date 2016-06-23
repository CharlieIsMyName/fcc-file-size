var express=require("express");
var app=express();
var multer=require("multer");
var port=process.env.PORT||8080;



app.get('/',express.static(__dirname+'/public'));

app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
    res.json({
        "size":req.file.size
    });
});

app.listen(port,function(){
    console.log("app is listening on port "+port);
});