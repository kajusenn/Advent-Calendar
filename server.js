const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));


const windows = require('./data');

const PORT = process.env.PORT || 3000;


function saveToJSON(data) {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

function loadFromJSON() {
    const file = fs.readFileSync('data.json');
    return JSON.parse(file);
}


app.get('/status', (req, res) => {
    res.json({ ok: true });
});

app.get('/windows', (req, res) => {
    res.json(windows);
});

app.put('/windows/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const window = windows.find(w => w.id === id);

    if (!window) {
        return res.status(404).json({ error: "Window not found" });
    }

    window.opened = true;

    res.json(window);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
