import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/app/domain';
import { Repository } from 'typeorm';
import { serviceResponse } from 'src/app/core';

@Injectable()
export class ChangePasswordProvider {
  @InjectRepository(User)
  private readonly usersRepo: Repository<User>;
  @Inject(forwardRef(() => HashingProvider))
  private readonly hashingProvider: HashingProvider;

  async changePassword(user: any, oldPassword: string, newPassword: string) {
    try {
      const existingUser = this.usersRepo.findOne({
        where: { id: user.id },
      });

      console.log('Existing user is?:', existingUser);

      if (!existingUser) {
        throw new BadRequestException('User not found...');
      }

      const passwordMatch = await this.hashingProvider.comparePassword(
        oldPassword,
        user.password
      );

      console.log('Password match is:', passwordMatch);

      if (!passwordMatch) {
        throw new UnauthorizedException('Wrong Credentials');
      }

      const newHashedPassword = this.usersRepo.create({
        ...user,
        password: await this.hashingProvider.hashPassword(newPassword),
      });
      const data = await this.usersRepo.save(newHashedPassword);

      console.log('New Data is:', data);

      return serviceResponse({
        status: true,
        message: `Password of ${user?.firstName} changed successfully`,
        data,
      });
    } catch (error) {
      {
        return serviceResponse({
          status: false,
          message: `An error occured:- ${error}`,
        });
      }
    }
  }
}
