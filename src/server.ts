import { NestFactory } from '@nestjs/core';

import { CreditManagementModule } from './credit-management/credit-management.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CreditManagementModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
