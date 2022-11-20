import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Versionamiento
  app.enableVersioning({
    type: VersioningType.URI,
  });

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('API test backend para wompi')
    .setDescription(
      'API desarrollada integrando ciertas funcionalidades con wompi como crear transacciones o métodos de pago',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
