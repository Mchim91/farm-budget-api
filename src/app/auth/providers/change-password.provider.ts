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

  async changePassword(user: User, oldPassword: string, newPassword: string) {
    try {
      const existingUser = await this.usersRepo.findOne({
        where: { id: user.id },
      });

      if (!existingUser) {
        throw new BadRequestException('User not found...');
      }

      const passwordMatch = await this.hashingProvider.comparePassword(
        oldPassword,
        existingUser.password
      );

      if (!passwordMatch) {
        throw new UnauthorizedException('Wrong Credentials');
      }

      existingUser.password = await this.hashingProvider.hashPassword(
        newPassword
      );

      const updatedUser = await this.usersRepo.save(existingUser);

      return serviceResponse({
        status: true,
        message: `Password of ${existingUser?.firstName} ${existingUser?.lastName} changed successfully`,
        data: updatedUser,
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
