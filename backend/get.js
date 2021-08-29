
const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

var connection = mysql.createConnection({
      host:"localhost",
         user:"root",
         password:"jafe",
         database:"testnode",
         port:"3306"
     })
    

app.get('/', (req, res) => {
 
    connection.connect(function(err) {
        if (err) throw err;
        // if connection is successful
        connection.query("SELECT * FROM student", function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err) throw err;
          // if there is no error, you have the result
          console.log(result);
        });
      });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})