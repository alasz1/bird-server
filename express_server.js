var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var fs=require('fs');
var cors = require('cors')
app.use(cors())
var parser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use(express.static('public'));

router.route('/birds')
    .get(function (req, res){
    res.json(birds);
}).post(function (req, res){
    console.dir(req.body);
    let newBird=req.body;
    newBird.id=newBird.timestamp;
    birds.push(newBird);
    saveToFile();
    res.status(201).send(newBird);
});
router.route('/birds/:id').get(function (req, res){
    console.log(req.params.id);
    for(let p of birds){
        if(p.id==req.params.id){
            res.json(p);
            return;
        }
    }
    res.json({error: "Not found"});
}).delete(function (req, res){
    console.log(req.params.id);
    for(let i=0;i<birds.length;i++){
        if(birds[i].id==req.params.id){
            birds.splice(i,1)
            res.json({msg: 'Bird removed'}); 
            saveToFile();
            return;
        }
    }
    res.json({error: "Not found"});
}).put(function (req, res){
    console.dir(req.body);
    for(let i=0;i<birds.length;i++){
        if(birds[i].id==req.params.id){
            birds[i]=req.body;
            res.json(birds[i]); 
            saveToFile();
            return;
        }
    }
    res.json({error: "Not found"});
})

function saveToFile(){
    fs.writeFile("birds.json", JSON.stringify(birds), function(){
        console.log("Saved to file");
    });
}
app.use('/api', router);
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    fs.readFile("birds.json",function(err, data){
        birds=JSON.parse(data);
        });
    console.log("Now listening at http://%s:%s", host, port)
})

