import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const grpcOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(
        __dirname,
        './adapters/grpc/controllers/user/v1/proto/user.proto',
      ),
      url: 'localhost:50051',
    },
  };

  app.connectMicroservice(grpcOptions);
  await app.startAllMicroservices();
  // REST
  await app.listen(3000);
}
bootstrap();
