import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as Mail from 'nodemailer/lib/mailer';
import { createTransport } from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private nodemailerTransport: Mail;
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {
    this.nodemailerTransport = createTransport({
      host: `smtp.gmail.com`,
    });
  }
}
