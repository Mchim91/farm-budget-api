import { Exclude } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  Matches,
  IsEmail,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(96)
  email: string;

  // @IsString()
  // @IsNotEmpty()
  // @MinLength(8)
  // @Exclude()
  // @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
  //   message:
  //     'Has minimum 8 characters in length, At least one uppercase English letter, At least one lowercase English letter, At least one digit, At least one special character',
  // })
  password: string;
}
