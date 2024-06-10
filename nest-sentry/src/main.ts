import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import configuration from './configs/configuration';
import { SentryExceptionFilter } from './filters/sentry-exception.filter';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Sentry.init({
    dsn: configuration().sentryDsn,
  });

  app.useGlobalFilters(new HttpExceptionFilter(new Logger()));
  const { httpAdapter } = app.get(HttpAdapterHost);
  Sentry.setupNestErrorHandler(app, new SentryExceptionFilter(httpAdapter));

  await app.listen(configuration().port);
}
bootstrap();
