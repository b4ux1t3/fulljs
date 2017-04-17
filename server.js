import express from 'express';
import config from './config';
import apiRouter from  './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();
const sessions = [];

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData}) => {
      res.render('index', {
        initialMarkup, initialData
      });
    })
    .catch(console.error);

  sessions.push(req.ip + ' accessed this page at ' + Date() + '\n');
 
  console.info('Web request from:', req.ip, 'at', Date());
});
 
server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, config.host, () => {
  console.info('Express is listening on port', config.port);
});