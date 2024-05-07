import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseAbstractRepository } from 'src/common/repositories/base-abstract.repository';
import { UsersRepositoryInterface } from './interfaces/users-repository.interface';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersRepository
  extends BaseAbstractRepository<User>
  implements UsersRepositoryInterface
{
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    super(userModel);
  }

  async createUser(createUserDto: User): Promise<User> {
    return await this.repository.create(createUserDto);
  }

  // async complexQueryExample(email: string, name: string): Promise<User> {
  //   // 여러가지 복잡한 쿼리 작성
  // }
}
