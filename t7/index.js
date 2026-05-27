const express = require('express');
const app = express();




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {


    res.json({ name: 'Krish patel', age: 20 });
})

app.get('/about', (req, res) => {
    res.redirect(301, 'https://www.google.com');
})

app.get('/user', (req, res) => {
    res.send('<h1>Welcome to user page</h1>')
})