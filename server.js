const express = require('express');
const app = express();
const PORT = 3000;

// 1. Root route: Welcome text (Status 200)
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Backend Development Lab!');
});

// 2. About route: JSON with name and section (Status 200)
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Mokshagna Teja',
    section: 'CSE'
  });
});

// 3. Time route: Current date and time (Status 200)
app.get('/time', (req, res) => {
  res.status(200).send(`Current Date and Time: ${new Date().toISOString()}`);
});

// 4. 404 handler for unknown paths
app.use((req, res) => {
  res.status(404).send('404 Not Found: Page exist avvaledhu');
});

// Server listener
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});