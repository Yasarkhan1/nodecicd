const express = require('express');
const app = express();

app.get('/abc', (req, res) => {
    res.send('Updated....')
});

const port =process.env.port || 3000;
app.listen(port, () => {
    console.log('port',port)
})