// Лекция 1 Calculator
// const Calc = require('calc-js').Calc;
// console.log(process.argv);

// const [,, a, b] = process.argv

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// const { error } = require('console');
// const { fstat } = require('fs');
// const path = require('path');
// const fs = require('fs').promises;

    // fs.readFile(path.resolve('./package.json'), 'utf8', (error, data) => {
    //     if (error) {
    //         console.error(error);
    //     }
    //     console.log(data)
    // })

    // (async () => {
    //     try {
    //         const data = await fs.readFile('./data.txt', 'utf8')
    //         console.log(data)

    //         const newContact = ` ${data} people`
    //         await fs.writeFile('./data1.txt', newContact, 'utf-8')

    //         // await fs.rename('./dateFunctions.js', './temp/dateFunctions.js')

    //         console.log(await fs.readdir('./temp'));
    //     } catch (err) {
    //         console.error(err)
    //     }
    // })();
// Лекция 2 Server http

// const http = require('http');
// const fs = require('fs').promises;

// const PORT = 8081;

// const requestHandler = async (request, response) => {
//     const manifest = await fs.readFile('./package.json', 'utf8');
//         response.writeHead(200, { 'Content-type': 'text/json' });
//         return response.end(manifest);
    
// }

// const server = http.createServer(requestHandler);
// server.listen(PORT, (err) => {
//     if (err) {
//         console.error('error:', err);
//     }
//     console.log(`Server is work ${PORT}`)
// });

// =======Server Express======

// const express = require('express');
// const app = express();

// const PORT = 8081;

// app.get('/home', (req, res) => {
//     res.send('Доброго вечора ми з України');
// });

// app.post('/home', (req, res) => {
//     res.send('щось не так');
// });

// app.delete('/home', (req, res) => {
//     res.send('Допобачення телебачення');
// });

// app.use('/home', (req, res) => {
//     res.send('Для всіх');
// });

// app.listen(PORT, (err) => {
//     if (err) {
//         console.error('error:', err);
//     }
//     console.log(`Server is work ${PORT}`);
// });

// =======Server Express Morgan======

const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('tiny'));

app.post('/home', (req, res) => {
    if (!req.body.goit) {
        return res.status(400).json({status: 'goit parameter is required'})
    }
    res.json({ javascript: 'object', body: req.body });
});

app.listen(PORT, (err) => {
    if (err) {
        console.error('error:', err);
    }
    console.log(`Server is work ${PORT}`);
});
