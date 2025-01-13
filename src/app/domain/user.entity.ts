import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 96, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 96, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  @Exclude()
  password?: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  @Exclude()
  resetPasswordToken?: string;

  @Column({ type: 'timestamp', nullable: true })
  @Exclude()
  resetPasswordExpires?: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  otp?: string;

  @Column({ type: 'timestamp', nullable: true })
  otpExpires?: Date;
}
