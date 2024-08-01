import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe } from "@nestjs/common";
import { NotFoundException } from "./exceptions/NotFoundException";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new NotFoundException());
  await app.listen(3000);
}
bootstrap();
