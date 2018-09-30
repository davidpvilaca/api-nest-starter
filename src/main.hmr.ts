import { NestFactory } from '@nestjs/core';
import { config as dotEnvConfig } from 'dotenv';
import { AppModule } from './app.module';

// .env configuration
dotEnvConfig();

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
