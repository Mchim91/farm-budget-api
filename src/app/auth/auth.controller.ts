import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signin.dto';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { Auth } from './decorator/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { ChangePasswordDto } from '../data';
import { ActiveUser } from './decorator/active-user.decorator';
import { ActiveUserData } from './interfaces/active-user-data.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Auth(AuthType.None)
  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Auth(AuthType.None)
  @Post('refresh-tokens')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto);
  }

  @Post('change-password')
  @Auth(AuthType.Bearer)
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @ActiveUser() activeUser: any
  ) {
    return this.authService.changePassword(changePasswordDto, activeUser);
  }
}
