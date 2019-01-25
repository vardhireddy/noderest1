var http = require("http");
var express = require('express');
var app = express();


//create app server
var server = app.listen(8081,  "0.0.0.0", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all customers
app.get('/app/employee', function (req, res) {
   results = []
   emp1 = {"id":12,"name":"krishna","age":27,"dept":"sdn"}
   emp2 = {"id":13,"name":"varun","age":27,"dept":"sdn"}
   emp3 = {"id":14,"name":"bhuvana","age":27,"dept":"sdn"}
   emp4 = {"id":15,"name":"saptha","age":27,"dept":"sdn"}
   results.push(emp1)
   results.push(emp2)
   results.push(emp3)
   results.push(emp4)
   res.end(JSON.stringify(results));
});
