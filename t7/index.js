const express = require('express');
const app = express();




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');
app.get('/', (req, res) => {


    res.json({ name: 'Krish patel', age: 20 });
})

app.get('/about', (req, res) => {
    res.redirect('..');
})

app.get('/user', (req, res) => {
    res.render('user', { name: 'Krish patel', age: 20 });
})