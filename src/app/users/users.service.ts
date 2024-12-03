import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../domain';
import { Repository } from 'typeorm';
import { CreateUserProvider } from './providers/create-user.provider';
import { UserDto } from '../data';
import { FindOneUserByEmailProvider } from './providers/find-one-user-by-email.provider';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
    private readonly createUserProvider: CreateUserProvider,
    private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider
  ) {}

  async createUser(createUser: UserDto) {
    return this.createUserProvider.createUser(createUser);
  }

  async findOneByEmail(email: string) {
    return this.findOneUserByEmailProvider.findOneByEmail(email);
  }

  async findOneById(id: number) {
    try {
      const user = await this.usersRepo.findOneBy({ id });

      if (!user) {
        throw new BadRequestException('The user id does not exist');
      }

      return user;
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        { description: 'Error connecting to the databse' }
      );
    }
  }
}
