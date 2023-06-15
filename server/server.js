const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // 클라이언트 도메인을 여기에 설정
    methods: ['POST', 'GET'],
    credentials: true
  }));

dotenv.config({
    path:'./.env'
});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database : process.env.DATABASE
});

db.connect((err) =>{
    if(err) console.log(err);
    else console.log("MYSQL Connection Success");
})


app.post('/game', (req, res)=>{
    console.log(req.body.top);
    //    const sql = "INSERT INTO collection ('top', 'bottom', 'set') VALUES (?, ?, ?)";
    const sql = "INSERT INTO collection (`top`) VALUES (?)";
    const values = [
        req.body.top
        // req.body.top,
        // req.body.bottom,
        // req.body.set
    ];
    db.query(sql, values, (err, result)=>{
        if(err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status : "Success"});
    })
})

app.listen(5000, ()=>{
    console.log("Connectd to server");
})