import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { myLogger } from './logger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: myLogger
  });

  const config = new DocumentBuilder()
    .setTitle('Speaking club api')
    .setDescription('Project to set connect between two or many persons at the same time')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
