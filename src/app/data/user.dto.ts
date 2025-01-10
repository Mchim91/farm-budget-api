import { ApiProperty } from '@nestjs/swagger';
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
import { string } from 'joi';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  @ApiProperty({
    type: 'string',
    description: 'This is a required property',
  })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  @ApiProperty({
    type: 'string',
    description: 'This is an optional field',
  })
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(96)
  @ApiProperty({
    type: 'string',
    description: 'This is a required property',
  })
  email: string;

  // @IsString()
  // @IsNotEmpty()
  // @MinLength(8)
  // @Exclude()
  // @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
  //   message:
  //     'Has minimum 8 characters in length, At least one uppercase English letter, At least one lowercase English letter, At least one digit, At least one special character',
  // })
  @ApiProperty({
    type: 'string',
    description: 'This is a required property',
  })
  password: string;
}
