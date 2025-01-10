import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly baseUrl: string;
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService
  ) {
    this.baseUrl = this.configService.get<string>('BASE_URL');
  }

  async sendResetPasswordEmail(to: string, resetToken: string, name: string) {
    const resetUrl = `${this.baseUrl}/reset-password?token=${resetToken}`;

    const htmlTemplate = `
      <p>Hi ${name},</p>
      <p>You requested to reset your password. Click the link below to reset it:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>If you did not request this, you can safely ignore this email.</p>
    `;

    try {
      await this.mailerService.sendMail({
        to,
        subject: 'Password Reset Request',
        html: htmlTemplate,
        context: {
          name,
          resetUrl,
        },
      });

      this.logger.log(`Password reset email sent to ${to}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${to}`, error.stack);
      throw error;
    }
  }
}
