import { BaseRepository } from 'src/common/interfaces/base-repository.interface';
import { User } from '../schemas/user.schema';

export interface UsersRepositoryInterface extends BaseRepository<User> {
  createUser(userDto: User): Promise<User>;

  // complexQueryExample(email: string, name: string): Promise<User>;
}
