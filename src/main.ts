import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config  = new DocumentBuilder().setTitle('nestSwagger')
  .setDescription('Nest API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('/',app,document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(23232);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
