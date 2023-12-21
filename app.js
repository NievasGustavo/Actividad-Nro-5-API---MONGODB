const express = require('express');
const app = express();
 app.use(express.json());

 const librosRouter = require('./routes/libros');

 const errorHandler = require('./middleware/errorHandler');

 app.use('/libros', librosRouter);

 app.use(errorHandler);

const port = 3000;

 app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
 });
