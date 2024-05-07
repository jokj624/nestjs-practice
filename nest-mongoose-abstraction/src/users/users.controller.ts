import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return await this.usersService.createUser(userDto);
  }

  @Get()
  async getAllUsers() {
    return await this.usersService.findAllUsers();
  }

  @Get(':name')
  async getUser(@Param('name') name: string) {
    return await this.usersService.findUserByName(name);
  }

  @Put(':email')
  async updateUser(
    @Param('email') email: string,
    @Body() updateUserDto: { updatedName: string },
  ) {
    const { updatedName } = updateUserDto;

    return await this.usersService.updateUserNameByEmail(email, updatedName);
  }

  @Delete(':name')
  async deleteUser(@Param('name') name: string) {
    return await this.usersService.deleteUserByName(name);
  }
}
