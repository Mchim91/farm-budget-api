import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/app/domain';
import { UserDto } from 'src/app/data';
import { serviceResponse } from 'src/app/core';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from 'src/app/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider
  ) {}

  async createUser(user: UserDto) {
    try {
      const existingUser = await this.usersRepo.findOne({
        where: { email: user.email },
      });

      if (existingUser) {
        throw new BadRequestException(
          'The user already exist, please check your email address'
        );
      }

      const newUser = this.usersRepo.create({
        ...user,
        password: await this.hashingProvider.hashPassword(user.password),
      });
      const data = await this.usersRepo.save(newUser);

      return serviceResponse({
        status: true,
        message: `New User ${
          user?.[0]?.id ? 'updated' : 'created'
        } successfully`,
        data,
      });
    } catch (error) {
      {
        return serviceResponse({
          status: false,
          message: `An error occurred:- ${error}`,
        });
      }
    }
  }
}
