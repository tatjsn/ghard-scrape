const express = require('express');
const cors = require('cors');
const fs = require('node:fs');

const app = express();

app.use(express.json({limit: '3mb'}));
app.use(cors());

app.post('/', (req, res) => {
    console.log('received');
    try {
        fs.writeFileSync('output.json', JSON.stringify(req.body));
    } catch (err) {
        console.error(err);
    }
    console.log('saved', req.body.title, req.body.posts.length);
    res.json({ metadata: 'ok' });
});

console.log('listening port 8080...');
app.listen(8080);
