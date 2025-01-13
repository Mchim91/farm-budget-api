import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { HashingProvider } from './hashing.provider';
import { User } from 'src/app/domain';
import { serviceResponse } from 'src/app/core';

@Injectable()
export class ResetPasswordProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    private readonly hashingProvider: HashingProvider
  ) {}

  async resetPassword(
    email: string,
    newPassword: string,
    confirmPassword: string
  ) {
    if (newPassword != confirmPassword) {
      throw new BadRequestException('Password does not match');
    }

    const user = await this.usersRepo.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const hashedPassword = await this.hashingProvider.hashPassword(newPassword);
    user.password = hashedPassword;
    user.otp = null;
    user.otpExpires = null;

    await this.usersRepo.save(user);

    return serviceResponse({
      status: true,
      message: 'Password reset successfully',
    });
  }
}
