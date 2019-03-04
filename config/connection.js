//Setting up my sql connection
var mysql =require("mysql");
 
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password:"Josafat18",
    database:"burgers_db"
});

//Make connection
connection.connect(function(err){
    if(err){
        console.log("Error Connecting" + err.stack);
        return
    }
    console.log("connected as id: "+ connection.threadId);
});

//Export connection for our ORM use

module.exports = connection;