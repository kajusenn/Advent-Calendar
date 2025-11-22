const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));


const windows = require('./data');

const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
    res.json({ ok: true });
});

app.get('/windows', (req, res) => {
    res.json(windows);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
