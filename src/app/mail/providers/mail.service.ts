import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  constructor(private readonly mailerService: MailerService) {}

  async sendOtpEmail(to: string, otp: string) {
    const htmlTemplate = `
      <p>Your OTP for resetting your password is: <strong>${otp}</strong></p>
      <p>This OTP is valid for 10 minutes.</p>
    `;

    await this.mailerService.sendMail({
      to,
      subject: 'Your OTP for Password Reset',
      html: htmlTemplate,
    });
  }
}
