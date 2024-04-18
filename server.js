const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user:"root",
  password:"",
  database:"users",
  port: 3307
})

app.use(express.json)


app.get('/', (req, res)=> {
    return res.json("From BAckend Side");
})

app.get('/users', (req, res) => {
   const sql = "SELECT * FROM users";
   db.query(sql, (err, data) =>  {
    if(err) return res.json(err);
    return res.json(data);
   }) 
})

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  connection.query('UPDATE your_table SET ? WHERE id = ?', [newData, id], (err, result) => {
    if (err) {
      console.error('Error executing query: ', err);
      res.status(500).send('Error updating data');
      return;
    }
    res.send('Data updated successfully');
  });
});


app.post('user', (req, res) => {
  const data = req.body;
  connection.query('INSERT INTO your_table SET ?', data, (err, result) => {
    if (err) {
      console.error('Error executing query: ', err);
      res.status(500).send('Error saving data');
      return;
    }
    res.status(201).send('Data saved successfully');
  });
});

 app.delete('users/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM your_table WHERE id = ?', id, (err, result) => {
    if (err) {
      console.error('Error executing query: ', err);
      res.status(500).send('Error deleting data');
      return;
    }
    res.send('Data deleted successfully');
  });
});


  

app.listen(5000, () => {
  console.log(`Server is running well on port 5000.`);
});

