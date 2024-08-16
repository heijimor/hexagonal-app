import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(id: string): any {
    return { id, name: 'John Doe', age: 25, segment: 'van_gough' };
  }
}
