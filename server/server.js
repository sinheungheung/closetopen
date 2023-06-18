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

// 옷 데이터 저장
app.post('/game/cloth', (req, res)=>{
    console.log(req.body);
    const sql = "INSERT INTO collection (`top`, `bottom`, `set`) VALUES (?, ?, ?)";
    const values = [
        req.body.top,
        req.body.bottom,
        req.body.set
    ];
    db.query(sql, values, (err, result)=>{
        if(err){
            console.log(err);
            return res.json({Error: "Update data Error in server"});
        }
        return res.json({Status : "Success"});
    })
})

// 악세사리, 신발 데이터 업데이트
app.post('/game/accessorie', (req, res)=>{
    console.log(req.body);
    const sql = "UPDATE collection SET accessorie=?, shoes=? WHERE id=?";
    const values = [
        req.body.accessorie,
        req.body.shoes,
        req.body.id
    ];
    db.query(sql, values, (err, result)=>{
        if(err){
            console.log(err);
            return res.json({Error: "Update data Error in server"});
        }
        return res.json({Status : "Success"});
    })
})

// 옷 데이터 가져오기
app.get('/getcloths', (req, res)=>{
    console.log(req.body);
    const sql = "SELECT * FROM collection ORDER BY id DESC LIMIT 1";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Error: "Select data Error in server"});
        return res.json(result);
    })
})

app.get('/getall', (req, res)=>{
    console.log(req.body);
    const sql = "SELECT * FROM collection";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Error: "Select data Error in server"});
        return res.json(result);
    })
})


app.listen(5000, ()=>{
    console.log("Connectd to server");
})