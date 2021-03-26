const express = require('express');
const database = require('./config/database');
const urlsRouter = require('./routes/urls_router');
const redirectRouter = require('./routes/redirect_router');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.send('Welcome to url shortant');
});


app.use('/api/v0/urls', urlsRouter);
app.use('/redirect', redirectRouter);

app.listen(PORT, HOST);
database.once('open', () => {
  console.log('Connected to mongo database')
});

console.log(`Running on http://${HOST}:${PORT}...`);