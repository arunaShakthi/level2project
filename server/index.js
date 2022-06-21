  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  const cors = require("cors");
  const mysql = require("mysql");

  
  const db = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "meeting"
  })

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({extended: true}));
  
  
  app.get("/api/get", (req , res) =>{
    const sqlGet = "SELECT * FROM meetings";
    db.query(sqlGet , (error, result) =>{
        res.send(result);
    })
  })
   
  
    app.post("/api/post", (req, res) =>{
      const {name } = req.body;
      const sqlInsert ="INSERT INTO meeting(meetingHeading, note, date, time, link) VALUES(?, ?, ?, ?, ?)";
      db.query(sqlInsert, [meetingHeading, note, date, time, link], (error, result) =>{
          if(error){
              console.log(error);
            }
    })
})
    
app.listen(5000, () => {
    console.log("Server Online");
 })