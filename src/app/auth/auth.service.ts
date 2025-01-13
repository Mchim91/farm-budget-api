import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInProvider } from './providers/sign-in.provider';
import { RefreshTokensProvider } from './providers/refresh-tokens.provider';
import { SignInDto } from './dtos/signin.dto';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { ChangePasswordDto } from './dtos';

import { ChangePasswordProvider } from './providers/change-password.provider';
import { User } from '../domain';
import { ForgotPasswordProvider } from './providers/forgot-password.provider';
import { ResetPasswordProvider } from './providers/reset-password.provider';
import { VerifyOtpProvider } from './providers/verifyOtp.provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
    private readonly signInProvider: SignInProvider,
    private readonly refreshTokensProvider: RefreshTokensProvider,
    private readonly changePasswordProvider: ChangePasswordProvider,
    private readonly forgotPasswordProvider: ForgotPasswordProvider,
    private readonly resetPasswordProvider: ResetPasswordProvider,
    private readonly verifyOtpProvider: VerifyOtpProvider
  ) {}

  async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }

  async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    return await this.refreshTokensProvider.refreshTokens(refreshTokenDto);
  }

  async changePassword(changePasswordDto: ChangePasswordDto, user: User) {
    return await this.changePasswordProvider.changePassword(
      user,
      changePasswordDto.oldPassword,
      changePasswordDto.newPassword
    );
  }

  async forgotPassword(email: string) {
    return await this.forgotPasswordProvider.forgotPassword(email);
  }

  async verifyOtp(email: string, otp: string) {
    return await this.verifyOtpProvider.verifyOtp(email, otp);
  }

  async resetPassword(
    email: string,
    newPassword: string,
    confirmPassword: string
  ) {
    return await this.resetPasswordProvider.resetPassword(
      email,
      newPassword,
      confirmPassword
    );
  }
}
