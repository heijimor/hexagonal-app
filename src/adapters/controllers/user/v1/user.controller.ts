import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async show() {
    return this.userService.getUser('1');
  }
}
