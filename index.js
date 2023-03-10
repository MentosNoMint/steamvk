const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/steam.db')



var app = express();

app.listen(8888 , () =>{
    console.log("Server is listening on port" + 8888);
});

app.get('/' , (req , res) => {
    res.json('Молодец-=-=-==-=-=-=-!')
})

app.get('/games' , (req , res) => {
    db.all(`SELECT * FROM GAMES`, (err, rows) => {
       res.json(rows)
    })
})
app.get('/category' , (req , res) => {
    db.all(`SELECT * FROM CATEGORY`, (err, rows) => {
       res.json(rows)
    })
})
app.get('/games/price/:price' , (req , res) => {
    const price = req.params.price
    db.all(`SELECT * FROM GAMES WHERE price < $price`, {$price: price} ,(err, rows) => {
       res.json(rows)
    })
})
app.get('/type_of_games' , (req , res) => {
    db.all(`SELECT * FROM TYPE_OF_GAMES`, (err, rows) => {
       res.json(rows)
    })
})
app.get('/Publisher' , (req , res) => {
    db.all(`SELECT * FROM PUBLISHER`, (err, rows) => {
       res.json(rows)
    })
})
app.get('/Genres' , (req , res) => {
    db.all(`SELECT * FROM GENRES`, (err, rows) => {
       res.json(rows)
    })
})

