import { Inject, Injectable } from '@nestjs/common';
import { UsersRepositoryInterface } from './interfaces/users-repository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepositoryInterface')
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  async createUser(userDto: CreateUserDto) {
    return await this.usersRepository.create(userDto);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.usersRepository.find({});
  }

  async findUserByName(name: string): Promise<User> {
    return await this.usersRepository.findOne({ name });
  }

  async updateUserNameByEmail(
    email: string,
    updatedName: string,
  ): Promise<void> {
    await this.usersRepository.updateOne({ email }, { name: updatedName });
  }

  async deleteUserByName(name: string): Promise<void> {
    await this.usersRepository.deleteOne({ name });
  }
}
