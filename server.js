//console.log('hello world');

const express = require('express')
const app = express()
const port = 1203

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



var gsjson = require('google-spreadsheet-to-json');





gsjson({
        spreadsheetId: '1fEYXVyy-XqulpYw-i7Jewn9BK5bTLMoGucKqoOdZ-X4',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });

app.get('/json', (req, res) => {

    gsjson({
            spreadsheetId: '1fEYXVyy-XqulpYw-i7Jewn9BK5bTLMoGucKqoOdZ-X4',
            // other options...
        })
        .then(function(result) {
            console.log(result.length);
            console.log(result);
            res.send(result)
        })
        .catch(function(err) {
            console.log(err.message);
            console.log(err.stack);
        });
})