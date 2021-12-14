import winston from 'winston';
import util from 'util';
import DailyRotateFile from 'winston-daily-rotate-file';
import config from './config';

const isDevMode = process.env.NODE_ENV !== 'production';
const timeStampFormat = 'YYYY-MM-DD HH:mm:ss.SSS';

const loggingTemplate = (info: winston.Logform.TransformableInfo) => {
  return `${info.timestamp} - ${info.level}: ${info.message}`;
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'api-service' },
  transports: [
    new DailyRotateFile({
      filename: 'logs/api-error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp({
          format: timeStampFormat,
        }),
        winston.format.uncolorize({ message: true }),
        winston.format.printf(loggingTemplate)
      ),
      handleExceptions: true,
    }),
    new DailyRotateFile({
      filename: 'logs/api-requests-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: timeStampFormat,
        }),
        winston.format.uncolorize({ message: true }),
        winston.format.printf(loggingTemplate)
      ),
      handleExceptions: true,
    }),
  ],
});

if (isDevMode) {
  logger.add(
    new winston.transports.Console({
      level: config.logging.levelConsole,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: timeStampFormat,
        }),
        winston.format.printf(loggingTemplate)
      ),
    })
  );
}

const logWrapper = (originalLogger: winston.LeveledLogMethod) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]): winston.Logger => {
    return originalLogger(util.inspect(args, { colors: isDevMode, depth: isDevMode ? 15 : 5 }));
  };
};

logger.error = logWrapper(logger.error);
logger.warn = logWrapper(logger.warn);
logger.info = logWrapper(logger.info);
logger.verbose = logWrapper(logger.verbose);
logger.debug = logWrapper(logger.debug);
logger.silly = logWrapper(logger.silly);

export default logger;
