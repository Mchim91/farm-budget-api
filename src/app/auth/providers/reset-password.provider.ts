import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { HashingProvider } from './hashing.provider';
import { User } from 'src/app/domain';

@Injectable()
export class ResetPasswordProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    private readonly hashingProvider: HashingProvider
  ) {}

  async resetPassword(token: string, newPassword: string) {
    // Find the user by reset token
    const user = await this.usersRepo.findOne({
      where: {
        resetPasswordToken: await this.hashingProvider.hashPassword(token),
        resetPasswordExpires: MoreThan(new Date()), // Ensure token is not expired
      },
    });

    if (!user) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    // Update the user's password
    user.password = await this.hashingProvider.hashPassword(newPassword);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await this.usersRepo.save(user);

    return { message: 'Password reset successfully' };
  }
}
