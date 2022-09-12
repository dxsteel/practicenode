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


// const express = require('express');
// const morgan = require('morgan');
// const got = require('got');
// require('dotenv').config()
// const app = express();

// const { router } = require('./booksRouter');

// const PORT = process.env.PORT || 8081;
// const BASE = 'http://api.weatherbit.io/v2.0/current';

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use(morgan('tiny'));
// // app.use('/api', router);

// app.get('/api/weather', async (req, res) => {
//     try {
//         const response = await got(BASE, {
//             searchParams: {
//                 key: '036d9524dc264f01841668057487b2b0',
//                 lat: '50.427107',
//                 lon: '30.567437',
//             },
//             responseType: 'json'
//         });
//         res.json({response: response.body});
//     } catch (err) {
//         res.status(500).json({message: err.message})
//     }
    
// });

// app.listen(PORT, (err) => {
//     if (err) {
//         console.error('error:', err);
//     }
//     console.log(`Server is work ${PORT}`);
// });






// process.nextTick(function() {
//   console.log('NextTick callback');
// // })
// const logger = require('./module');
// logger.info('info function');
// logger.log('log function');

// const info = msg => {
//   console.log(`Info: ${msg}`);
// };

// const log = msg => {
//   console.log(`Log: ${msg}`);
// };

// module.exports = {
//   info,
//   log,
// };

// ===========================table===========================

// const fs = require('fs').promises;

// fs.readdir(__dirname)
//   .then(files => {
//     return Promise.all(
//       files.map(async filename => {
//         const stats = await fs.stat(filename);
//         return {
//           Name: filename,
//           Size: stats.size,
//           Date: stats.mtime,
//         };
//       }),
//     );
//   })
//   .then(result => console.table(result));

// =================================game===========================

// const readline = require('readline');
// const fs = require('fs').promises;
// const { program } = require('commander');
// require('colors');
// program.option(
//   '-f, --file [type]',
//   'file for saving game results',
//   'results.txt',
// );
// program.parse(process.argv);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let count = 0;
// const logFile = program.opts().file;
// const mind = Math.floor(Math.random() * 10) + 1;

// const isValid = value => {
//   if (isNaN(value)) {
//     console.log('Введіть число!'.red);
//     return false;
//   }
//   if (value < 1 || value > 10) {
//     console.log('Число має бути в діапазоні від 1 до 10'.red);
//     return false;
//   }
//   return true;
// };

// const log = async data => {
//   try {
//     await fs.appendFile(logFile, `${data}\n`);
//     console.log(`Вдалося зберегти результат у файл ${logFile}`.green);
//   } catch (err) {
//     console.log(`Не вдалося зберегти файл ${logFile}`.red);
//   }
// };

// const game = () => {
//   rl.question(
//     'Введіть число від 1 до 10, щоб вгадати задумане: '.yellow,
//     value => {
//       let a = +value;
//       if (!isValid(a)) {
//         game();
//         return;
//       }
//       count += 1;
//       if (a === mind) {
//         console.log('Вітаю Ви вгадали число за %d крок(ів)'.green, count);
//         log(
//           `${new Date().toLocaleDateString()}: Вітаю Ви вгадали число за ${count} крок(ів)`,
//         ).finally(() => rl.close());
//         return;
//       }
//       console.log('Ви не вгадали ще спроба'.red);
//       game();
//     },
//   );
// };

// game();

// app.get('/contact/:id', (req, res) => {
//   res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });


