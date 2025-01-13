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

    // Generate a reset
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await this.hashingProvider.hashPassword(otp);
    user.otp = hashedOtp;
    user.otpExpires = new Date(Date.now() + 10 * 60);

    await this.usersRepo.save(user);

    await this.mailService.sendOtpEmail(user.email, otp);

    return serviceResponse({
      status: true,
      message: 'OTP sent to email',
    });
  }
}
