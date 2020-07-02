import express from 'express';
import cors from 'cors';
import config from '../config';
import routes from '../api';

export default ({ app }: { app: express.Application }) => {
  app.get('/status', (que, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.enable('trust proxy');
  app.use(cors());
  app.use(require('method-override')());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(config.api.prefix, routes());

  //capturar 404 y un forward error
  app.use((req, res, next) => {
    const err = new Error('no Found');
    err['status'] = 404;
    next(err);
  });

  //error handle
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      erros: {
        message: err.message,
      },
    });
  });
};
