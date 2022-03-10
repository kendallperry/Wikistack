const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 5432;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
});



app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));