import expressLoader from './express';
import mongooseLoader from './mongoose';
import logger from './logger';
import chalk from 'chalk';
import dependeciIonyector from './dependeciIonyector';

export default async ({ expressApp }) => {
  await mongooseLoader();
  logger.info(chalk.magenta('BD cargada y conectada'));

  await dependeciIonyector({
    models: [],
  });
  logger.info(chalk.magenta('Dependecias fueron intectadas con exito'));

  await expressLoader({ app: expressApp });
  logger.info(chalk.magenta('Expres Cargado con exito'));
};
