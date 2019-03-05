var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){

        burger.insertOne(req.body.burger_name,function(){
        //send back the ID of the new Burger
        res.redirect("/");
    });
});

router.put("/:id", function(req,res){
    var id = req.params.id;
    console.log("Putting")
    burger.updateOne(id, function(result){
        
        
        console.log(result)
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
            
        }
    });
});

// Export routes for server.js to use.
module.exports = router;