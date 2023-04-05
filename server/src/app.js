require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

const httpServer = createServer(app);
global.io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

if (process.env.NODE_ENV != 'test') {
  app.use(morgan('tiny'));
}

app.use(cors({ original: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

global.listSocketUser = {};

io.on('connection', (socket) => {
  socket.on('login', ({ _id }) => {
    listSocketUser[_id] = socket.id;
  });
});

module.exports = httpServer;
