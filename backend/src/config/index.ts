import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('No encontro el archivo .ENV');
}

export default {
  port: parseInt(process.env.PORT, 10),
  dataBaseUrl: process.env.MONGODB_URL,
  jwtSecret: process.env.JWT_SECRET,
  codeRequest: {
    OK: 0,
    VAL: 1,
  },
  LOGS: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  api: {
    prefix: '/api',
  },
};
