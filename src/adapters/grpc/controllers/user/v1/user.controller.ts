import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { User, GetUserRequest } from './proto/user';
import { UserService } from '../../../../../user/services/user.service';

@Controller()
export class UserGrpcService {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUser')
  GetUser(
    data: GetUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): User {
    const response = this.userService.getUser('1');
    response.name = 'John GRPC';
    return response;
  }
}
