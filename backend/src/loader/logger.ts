import winston from 'winston';
import config from '../config';

const transports = [];
if (process.env.NODE_ENV !== 'development') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.cli(), winston.format.splat()),
    }),
  );
}

const LoggerInstance = winston.createLogger({
  level: config.LOGS.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HHH:mm:ss',
    }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports,
});

export default LoggerInstance;
