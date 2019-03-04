var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index",burger_data);
    });
});

router.post("/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        //send back the ID of the new Burger
        res.json({id: result.insertId});
    });
});

router.put("/burgers/update", function(req,res){
    // var condition = "id = " + req.params.id;
    // console.log("condition", condition);

    burger.updateOne(req.body.id, function(result){
        console.log(result)
        res.redirect("/");
        if(result.changeRows == 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;