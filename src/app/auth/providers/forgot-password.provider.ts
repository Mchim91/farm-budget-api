import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { serviceResponse } from 'src/app/core';
import { User } from 'src/app/domain';
import { nanoid } from 'nanoid';
import { MailService } from 'src/app/mail/providers/mail.service';

@Injectable()
export class ForgotPasswordProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
    private readonly mailService: MailService
  ) {}

  async forgotPassword(email: string) {
    // Check that the user exists
    const user = await this.usersRepo.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Generate a reset token
    const resetToken = nanoid(64);

    // Hash the token and set expiration
    user.resetPasswordToken = await this.hashingProvider.hashPassword(
      resetToken
    );
    user.resetPasswordExpires = new Date(Date.now() + 3600 * 1000); // Token valid for 1 hour

    await this.usersRepo.save(user);

    await this.mailService.sendResetPasswordEmail(
      user.email,
      resetToken,
      user.firstName || 'User'
    );

    return serviceResponse({
      status: true,
      message: 'Password reset email sent successfully',
    });
  }
}
