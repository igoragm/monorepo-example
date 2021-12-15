import sourceMapSupport from 'source-map-support';
import 'reflect-metadata';
import config from './services/config';
import serverApp from './server';
import logger from './services/logger';

if (config.node.isDev) {
  sourceMapSupport.install();
}

process
  .on('unhandledRejection', (reason, p) => {
    logger.error('unhandledRejection', reason, 'Unhandled Rejection at Promise', p);
    process.exit(1);
  })
  .on('uncaughtException', (err) => {
    logger.error('Uncaught Exception thrown', err);
    process.exit(1);
  });

  serverApp.listen(config.api.listenPort, () => {
    logger.info('server is running at port ' + config.api.listenPort);
  });
