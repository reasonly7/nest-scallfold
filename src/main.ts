import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useSwaggerModule } from './swagger/useSwaggerModule';
import { ConfigService } from '@nestjs/config';
import { useGlobalPipes } from './pipes/useGlobalPipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useGlobalPipes(app);
  useSwaggerModule(app);
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('app.port'));
}
bootstrap();
