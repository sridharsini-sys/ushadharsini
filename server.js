const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 8085;

app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Put your MySQL password here
  database: 'studentdata'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed 💔:', err);
  } else {
    console.log('Connected to MySQL 🌸');
  }
});

// 📝 Register API
app.post('/register', (req, res) => {
  const { name, email, password, slot } = req.body;
  const sql = 'INSERT INTO students (name, email, password, slot) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, password, slot], (err) => {
    if (err) {
      console.error('Registration error:', err);
      res.status(500).send('Error registering user 💔');
    } else {
      res.send('User registered successfully 💖');
    }
  });
});

// 🔐 Login API
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM students WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      res.status(500).send('Error logging in 💔');
    } else if (results.length > 0) {
      res.send('Login successful 🌟');
    } else {
      res.status(401).send('Invalid credentials 💔');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} 💫`);
});