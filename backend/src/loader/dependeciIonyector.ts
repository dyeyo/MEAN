//PARA INYECTAR ARCHIVOS
import { Container } from 'typedi';
import LoggerInstance from './logger';
import chalk from 'chalk';
import { models } from 'mongoose';

export default ({ models }: { models: { name: string; models: any }[] }) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.models);
    });
    Container.set('Logger', LoggerInstance);
    LoggerInstance.info(chalk.magenta('Logger y modelos inyectado'));
  } catch (error) {
    LoggerInstance.error(`Error en la dependecia: ${error}`);
    throw error;
  }
};
