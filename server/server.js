const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample user data
const users = [
  { username: 'user1', birthdate: '1990-01-01', age: 34, email: 'user1@example.com', password: 'pass1', valid: true },
  { username: 'user2', birthdate: '1985-05-15', age: 39, email: 'user2@example.com', password: 'pass2', valid: true },
  { username: 'user3', birthdate: '2000-12-31', age: 23, email: 'user3@example.com', password: 'pass3', valid: false },
];

// Authentication route
app.post('/api/auth', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ 
      username: user.username, 
      birthdate: user.birthdate, 
      age: user.age, 
      email: user.email, 
      valid: user.valid 
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
