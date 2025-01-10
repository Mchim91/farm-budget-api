import { IsString } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  oldPassword: string;

  // @IsString()
  // @IsNotEmpty()
  // @MinLength(8)
  // @Exclude()
  // @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
  //   message:
  //     'Has minimum 8 characters in length, At least one uppercase English letter, At least one lowercase English letter, At least one digit, At least one special character',
  // })
  newPassword: string;
}
