import {
  Injectable,
  BadRequestException,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashingProvider } from './hashing.provider';
import { User } from 'src/app/domain';

@Injectable()
export class VerifyOtpProvider {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider
  ) {}

  async verifyOtp(email: string, otp: string) {
    const user = await this.usersRepo.findOne({ where: { email } });

    console.log('time: ', new Date().getTime(), user.otpExpires.getTime());
    const expires = new Date().getTime() - user.otpExpires.getTime();
    console.log(expires);

    if (!user && !user.otpExpires && expires < 0) {
      console.log('User:', user);
      console.log('OTP Expires:', user ? user.otpExpires : null);
      console.log('Current Time:', new Date());
      throw new BadRequestException('Invalid or expired OTP');
    }

    const isOtpValid = await this.hashingProvider.comparePassword(
      otp,
      user.otp
    ); // Compare OTP with hashed OTP
    if (!isOtpValid) {
      throw new BadRequestException('Invalid OTP');
    }

    return { message: 'OTP verified successfully' };
  }
}
