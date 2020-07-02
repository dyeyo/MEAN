import 'reflect-metadata';
import config from './config';
import logger from './loader/logger';
import express from 'express';
import chalk from 'chalk';

async function startSever() {
  const app = express();
  await require('./loader').default({ expressApp: app });
  app.listen(config.port, (err) => {
    if (err) {
      logger.error(err);
      process.exit(1);
      return;
    }
    logger.info(`
      #############################################
      ${chalk.magenta('Server Listening on the port')} ${chalk.yellow(config.port)}
      #############################################
    `);
  });
}
startSever();
