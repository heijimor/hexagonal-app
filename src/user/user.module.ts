import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from '../adapters/controllers/user/v1/user.controller';
import { UserGrpcService } from 'src/adapters/grpc/controllers/user/v1/user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController, UserGrpcService],
})
export class UserModule {}
