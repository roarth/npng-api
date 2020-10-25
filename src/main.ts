import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const port = process.env.APP_PORT || 3000;
  await app.listen(3000);
  logger.log(`NPNG Api listening on port ${port}`)
}
bootstrap();
